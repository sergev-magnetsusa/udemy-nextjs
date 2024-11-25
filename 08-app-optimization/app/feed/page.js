import {getPosts} from '@/lib/posts';
import PostList from '@/components/posts/PostList';

export const generateMetadata = async () => {
  const posts = await getPosts();
  const numberOfPosts = posts.length || 0;
  return {
    title: `Browse all our ${numberOfPosts} posts.`,
    description: 'Browse all our posts',
  }
}

const FeedPage = async () => {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <PostList posts={posts}/>
    </>
  );
};

export default FeedPage;