'use client';

import { useState, useMemo } from 'react';
import styles from '../styles/blogList.module.css';
import clsx from 'clsx';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import Blob1 from '@/components/Blob1';
import Blob2 from '@/components/Blob2';
import { getTagCounts } from '@/utils/getTagCounts';

export default function BlogIndexClient({ posts }) {
  const tagCounts = getTagCounts(posts);
  const allTags = Object.keys(tagCounts);

  const [searchText, setSearchText] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const inSearch =
        post.title.toLowerCase().includes(searchText.toLowerCase()) ||
        (post.tags || []).some((tag) =>
          tag.toLowerCase().includes(searchText.toLowerCase())
        );

      const inTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => (post.tags || []).includes(tag));

      return inSearch && inTags;
    });
  }, [posts, searchText, selectedTags]);

  return (
    <div className={clsx(styles.blogBody)}>
      <div className={styles.header}>
        <h1 className={styles.heading}>
          Blog. <span className={styles.totalCount}>({posts?.length})</span>
        </h1>
        <SearchBar
          value={searchText}
          onChange={setSearchText}
          suggestions={searchText ? filteredPosts : []}
        />
      </div>
      <Blob1 />
      <Blob2 />

      <div className={styles.contentContainer}>
        <aside className={styles.filterContainer}>
          <div className={styles.filterHeader}>/TOPICS</div>
          <div className={styles.filterItems}>
            {allTags.map((tag) => (
              <label
                key={tag}
                className={clsx(
                  styles.filterItem,
                  selectedTags.includes(tag) ? styles.selectedTag : ''
                )}
              >
                <input
                  type='checkbox'
                  checked={selectedTags.includes(tag)}
                  onChange={() =>
                    setSelectedTags((prev) =>
                      prev.includes(tag)
                        ? prev.filter((t) => t !== tag)
                        : [...prev, tag]
                    )
                  }
                />
                {tag} <span className={styles.count}>({tagCounts[tag]})</span>
              </label>
            ))}
          </div>
        </aside>

        <section className={styles.blogListContainer}>
          <header className={styles.blogHeader}>
            <div className={styles.headerMeta}>/META</div>
            <div className={styles.headerName}>/TITLE</div>
          </header>

          <ul className={styles.list}>
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                className={styles.blogItem}
                href={`/blog/${post.id}`}
              >
                <div className={styles.meta}>
                  {post.date} • {post.readingTime} min read
                </div>
                <h2 className={styles.name}>
                  {post.title.length > 50
                    ? post.title.slice(0, 50) + '…'
                    : post.title}{' '}
                  {/* {post.tags?.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))} */}
                </h2>
              </Link>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
