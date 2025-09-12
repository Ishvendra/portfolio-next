import getAllPosts from '@/utils/getAllPosts';
import BlogIndexClient from '@/components/BlogIndexClient';

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogIndexClient posts={posts} />;
}
