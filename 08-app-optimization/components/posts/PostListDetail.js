// 'use client';

import {formatDate} from '@/lib/format';
import LikeButton from '@/components/ui/LikeButton';
import Image from 'next/image';

const imageLoader = (config) => {
  const urlStart = config.src.split('upload/')[0];
  const urlEnd = config.src.split('upload/')[1];
  const transformations = `w_200,q_${config.quality || 50}`;
  return `${urlStart}upload/${transformations}/${urlEnd}`;

}

const PostListDetail = ({post, action}) => {
  return (
    <>
      <article className="post">
        <div className="post-image">
          <Image
            src={post.image}
            alt={post.title}
            loader={imageLoader}
            quality={50}
            width={200}
            height={120}
          />
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
              <form
                action={action.bind(null, post.id)}
                className={post.isLiked ? 'liked' : ''}
              >
                <LikeButton/>
              </form>
            </div>
          </header>

          <p>{post.content}</p>
        </div>
      </article>
    </>
  );
};

export default PostListDetail;