'use client';

import {useOptimistic} from 'react';
import {togglePostLikeStatus} from '@/actions/posts';
import PostListDetail from '@/components/posts/PostListDetail';

const PostList = ({posts}) => {
  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(posts, (prevPosts, updatedPostId) => {
    const updatedPostIdx = prevPosts.findIndex(post => post.id === updatedPostId);

    if (updatedPostIdx === -1) {
      return prevPosts;
    }

    const updatedPost = { ...prevPosts[updatedPostIdx] };
    updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1);
    updatedPost.isLiked = !updatedPost.isLiked;
    const newPosts = [...prevPosts];
    newPosts[updatedPostIdx] = updatedPost;
    return newPosts;
  })

  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>
  }

  const updatePost = async (postId) => {
    updateOptimisticPosts(postId);
    await togglePostLikeStatus(postId);
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <PostListDetail post={post} action={updatePost}/>
        </li>
      ))}
    </ul>
  );
}

export default PostList