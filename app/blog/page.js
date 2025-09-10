import styles from '../../styles/blogList.module.css';
import Blob1 from '@/components/Blob1';
import Blob2 from '@/components/Blob2';
import clsx from 'clsx';
import SearchBar from '@/components/SearchBar';
import BlogNavbar from '@/components/BlogNavbar';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function generateMetadata() {
  const url = 'https://ishvendra.in/blog';

  return {
    title: 'Blog | Ishvendra Singh',
    description:
      'A collection of blogs on frontend, fullstack, and system design.',
    openGraph: {
      title: 'Blog | Ishvendra Singh',
      description:
        'Explore blogs on React, Next.js, and real-world engineering practices.',
      url,
      siteName: 'Ishvendra Singh Portfolio',
      images: [
        {
          url: 'https://ishvendra.in/assets/og/blog-listing.png',
          width: 1200,
          height: 630,
          alt: 'Blog listing preview',
        },
      ],
    },
  };
}

export default function Blog() {
  const blogDir = path.join(process.cwd(), 'data/blog');

  const files = fs.readdirSync(blogDir);

  const posts = files
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const source = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(source);

      return {
        id: file.replace(/\.mdx$/, ''),
        ...data,
      };
    })
    .reverse();

  return (
    <div className={clsx(styles.blogBody)}>
      <BlogNavbar />
      <div className={styles.header}>
        <h1 className={styles.heading}>Blog.</h1>
        <SearchBar />
      </div>
      <Blob1 />
      <Blob2 />

      <div className={styles.contentContainer}>
        <aside className={styles.filterContainer}>
          <div className={styles.filterHeader}>/FILTERS</div>
          {/* filters go here */}
        </aside>

        <section className={styles.blogListContainer}>
          <header className={styles.blogHeader}>
            <div className={styles.headerMeta}>/META</div>
            <div className={styles.headerName}>/NAME</div>
          </header>

          <ul className={styles.list}>
            {posts.map((post) => (
              <Link
                key={post.id}
                className={styles.blogItem}
                href={`/blog/${post.id}`}
              >
                <div className={styles.meta}>
                  {post.date} • {post.readingTime} min read
                </div>
                <h2 className={styles.name}>{post.title}</h2>
              </Link>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
