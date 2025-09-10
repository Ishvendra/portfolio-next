import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'data', 'blog');

export async function getAllPosts() {
  const filenames = await fs.readdir(postsDirectory);

  const allPostsData = await Promise.all(
    filenames.map(async (filename) => {
      const id = filename.replace(/\.mdx$/, '');

      const fullPath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(fullPath, 'utf8');

      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      };
    })
  );

  return allPostsData;
}
