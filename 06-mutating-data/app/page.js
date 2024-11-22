import {Suspense} from 'react';
import {getPosts} from '@/app/lib/posts';
import Posts from '@/app/components/posts';

const LatestPosts = async () => {
  const latestPosts = await getPosts(2);
  return <Posts posts={latestPosts}/>
}

const RootPage = () => {
  return (
    <>
      <h1>Welcome back!</h1>
      <p>Here&#39;s what you might&#39;ve missed.</p>
      <section id="latest-posts">
        <Suspense fallback={<p>Loading recent posts...</p>}>
          <LatestPosts/>
        </Suspense>
      </section>
    </>
  );
}

export default RootPage