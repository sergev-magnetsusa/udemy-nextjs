import Posts from '@/app/components/posts';
import { getPosts } from '@/app/lib/posts';

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
