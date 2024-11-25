import PostForm from '@/components/posts/PostForm';
import {createPost} from '@/actions/posts';

const NewPostPage = () => {
  return <PostForm action={createPost}/>;
};

export default NewPostPage;