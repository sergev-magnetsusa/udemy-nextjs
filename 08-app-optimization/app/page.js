import {getPosts} from '@/lib/posts';
import PostList from '@/components/posts/PostList';
import {Suspense} from 'react';

export const metadata = {
  title: 'Latest Posts',
  description: 'Browse latest posts'
}

const LatestPosts = async () => {
  const latestPosts = await getPosts(2);
  return <PostList posts={latestPosts}/>;
};

const RootPage = () => {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here's what you might've missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts/>
        </Suspense>
      </section>
    </>
  );
};

export default RootPage;