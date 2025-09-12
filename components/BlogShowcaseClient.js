import Blob1 from './Blob1';
import Blob2 from './Blob2';
import styles from '../styles/blogPage.module.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from './ContactForm';

const BlogShowcaseClient = ({ blog, children, relatedPosts }) => {
  const ByLineSection = () => (
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
  );

  const ReadNextSection = () =>
    relatedPosts &&
    relatedPosts.length > 0 && (
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
            <Link
              key='complete-blog-list'
              href='/blog'
              className={styles.blogItem}
            >
              <h3 className={styles.name}>Complete Blog List →</h3>
            </Link>
          </ul>
        </div>
      </div>
    );

  return (
    <div className={clsx(styles.blogBody)}>
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
            </div>
          </div>
          <div className={styles.readNextDesktop}>
            <ByLineSection />
            <ReadNextSection />
          </div>
        </aside>

        <section className={styles.blogListContainer}>
          <header className={styles.blogHeader}>
            <div className={styles.headerMeta}>/ARTICLE</div>
          </header>
          <article className={styles.articleContent}>{children}</article>
          <div className={styles.readNextMobile}>
            <ByLineSection />

            <ReadNextSection />
          </div>
        </section>
      </div>

      <ContactForm />
    </div>
  );
};

export default BlogShowcaseClient;
