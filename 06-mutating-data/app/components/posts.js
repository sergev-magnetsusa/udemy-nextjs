'use client';

import {formatDate} from '@/app/lib/format';
import LikeButton from './like-icon';
import {useOptimistic} from 'react';
import {togglePostLikeStatus} from '@/app/actions/posts';

function Post({post, updatePost}) {
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title}/>
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <LikeButton post={post} updatePost={updatePost}/>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({posts = []}) {

  const [optimisticPosts, updateOptimisticPosts] = useOptimistic(posts, (prevPosts, updatedPostId) => {
    const updatedPostIndex = prevPosts.findIndex((post) => post.id === updatedPostId);

    if (updatedPostIndex === -1) {
      return prevPosts;
    }

    const updatedPost = {...prevPosts[updatedPostIndex]};
    updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? - 1 : 1);
    updatedPost.isLiked = !updatedPost.isLiked;

    const newPosts = [...prevPosts];
    newPosts[updatedPostIndex] = updatedPost;

    return newPosts;
  });


  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  const updatePost = async (postId) => {
    updateOptimisticPosts(postId);
    await togglePostLikeStatus(postId);
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} updatePost={updatePost}/>
        </li>
      ))}
    </ul>
  );
}