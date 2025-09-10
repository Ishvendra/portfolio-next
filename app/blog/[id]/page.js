import { promises as fs } from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import BlogShowcaseClient from '@/components/BlogShowcaseClient';
import NotFound from '@/app/not-found';
import { getAllPosts } from '@/lib/posts';

export async function generateStaticParams() {
  return [{ id: 'deep-dive-nextjs-server-components' }];
}

async function getBlogById(id) {
  try {
    const filePath = path.join(process.cwd(), 'data', 'blog', `${id}.mdx`);
    const source = await fs.readFile(filePath, 'utf8');

    return await compileMDX({
      source,
      options: { parseFrontmatter: true },
    });
  } catch (error) {
    return null;
  }
}

export default async function BlogPage({ params }) {
  const { id } = await params;
  const currentPost = await getBlogById(id);

  if (!currentPost) {
    return <NotFound />;
  }

  const allPosts = await getAllPosts();
  const relatedPosts = currentPost.frontmatter?.alsoRead
    ? allPosts.filter((p) => currentPost.frontmatter?.alsoRead.includes(p.id))
    : [];

  const { content, frontmatter } = currentPost;

  return (
    <BlogShowcaseClient blog={frontmatter} relatedPosts={relatedPosts}>
      {content}
    </BlogShowcaseClient>
  );
}
