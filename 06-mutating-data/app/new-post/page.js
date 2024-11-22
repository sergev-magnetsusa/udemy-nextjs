'use client';

import {useActionState} from 'react';
import {savePost} from '@/app/actions/posts';

const NewPostPage = () => {
  const [message, formAction, isPending] = useActionState(savePost, {});

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title"/>
        </p>
        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5"/>
        </p>

        {message.errors && (
          <ul className="form-errors">
            {message.errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        )}

        <p className="form-actions">
          <button type="reset" disabled={isPending}>Reset</button>
          <button type="submit" disabled={isPending}>
            {isPending ? 'Creating...' : 'Create Post'}
          </button>
        </p>
      </form>
    </>
  );
};

export default NewPostPage;