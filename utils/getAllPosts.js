import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getAllPosts = () => {
  const blogDir = path.join(process.cwd(), 'data/blog');
  const files = fs.readdirSync(blogDir);
  const posts = files
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const source = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(source);
      return { id: file.replace(/\.mdx$/, ''), ...data };
    })
    .reverse();

  return posts;
};

export default getAllPosts;
