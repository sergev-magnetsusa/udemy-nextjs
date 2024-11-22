'use server';
// import 'server-only';

import {storePost, updatePostLikeStatus} from '@/app/lib/posts';
import {redirect} from 'next/navigation';
import {uploadImage} from '@/app/lib/cloudinary';
import {revalidatePath} from 'next/cache';

const savePost = async (prevState, formData) => {
  const title = formData.get('title');
  const image = formData.get('image');
  const content = formData.get('content');

  const errors = [];

  if (!title || title.trim().length === 0) {
    errors.push('Title is required');
  }

  if (!content || content.trim().length === 0) {
    errors.push('Content is required');
  }

  if (!image || image.size === 0) {
    errors.push('Image is required');
  }

  if (errors.length > 0) {
    return {errors};
  }

  let imageUrl = '';
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error('Image upload failed, post was not created. Please try again later');
  }

  try {
    storePost({
      imageUrl,
      title,
      content,
      userId: 1,
    });
  } catch (error) {
    throw new Error('Failed to save a post. Please try again later');
  }

  // revalidatePath('/', 'layout');
  redirect('/feed');
};

const togglePostLikeStatus = async (postId) => {
  updatePostLikeStatus(postId, 2);
  revalidatePath('/feed');
}

export {
  savePost,
  togglePostLikeStatus,
};