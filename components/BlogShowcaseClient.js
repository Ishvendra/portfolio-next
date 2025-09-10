import BlogNavbar from './BlogNavbar';
import Blob1 from './Blob1';
import Blob2 from './Blob2';
import styles from '../styles/blogPage.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const BlogShowcaseClient = ({ blog, children, relatedPosts }) => {
  return (
    <div className={clsx(styles.blogBody)}>
      <BlogNavbar />
      <div className={styles.header}>
        <h1 className={styles.heading}>
          {blog.title}: <span className={styles.subTitle}>{blog.subTitle}</span>
        </h1>
      </div>
      <Blob1 />
      <Blob2 />
      <div className={styles.contentContainer}>
        <aside className={styles.filterContainer}>
          <div>
            <div className={styles.filterHeader}>/META</div>
            <div className={styles.metaContainer}>
              <div className={styles.metaRow}>
                <span className={styles.metaCol1}>Date:</span>
                <span className={styles.metaCol2}>{blog.date}</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaCol1}>Reading time:</span>
                <span className={styles.metaCol2}>{blog.readingTime} mins</span>
              </div>
              <div className={styles.metaRow}>
                <span className={styles.metaCol1}>Categories:</span>
                <span className={styles.metaCol2}>{blog.tags.join(', ')}</span>
              </div>
              <div className={styles.byLineContainer}>
                <Image
                  src='/assets/common/bg.webp'
                  height={60}
                  width={60}
                  alt='face animation'
                  className={styles.myImage}
                />
                <div className={styles.byLine}>
                  <span className={styles.authorText}>Author:</span>
                  <h3 className={styles.me}>Ishvendra Singh</h3>
                  <p className={styles.me}>Developer</p>
                </div>
              </div>
            </div>
          </div>
          {relatedPosts && relatedPosts.length > 0 && (
            <div>
              <div className={styles.filterHeader}>/READ NEXT</div>
              <div className={styles.metaContainer}>
                <ul className={styles.list}>
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.id}
                      className={styles.blogItem}
                      href={`/blog/${related.id}`}
                    >
                      <h3 className={styles.name}>
                        {related.title} ({related.readingTime} mins)
                      </h3>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </aside>

        <section className={styles.blogListContainer}>
          <header className={styles.blogHeader}>
            <div className={styles.headerMeta}>/ARTICLE</div>
          </header>
          <article className={styles.articleContent}>{children}</article>
        </section>
      </div>
    </div>
  );
};

export default BlogShowcaseClient;
