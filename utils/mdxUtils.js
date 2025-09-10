import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content/blog');

export function getAllPosts() {
  const files = fs.readdirSync(contentDir);

  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(content);

    return {
      id: slug,
      ...data,
    };
  });
}

export function getPostBySlug(slug) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    id: slug,
    ...data,
    content,
  };
}
