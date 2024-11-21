import {DUMMY_NEWS} from '@/dummy-news';
import NewsList from '@/components/news/NewsList';

const NewsPage = () => {
  return (
    <>
      <h1>News</h1>
      <NewsList news={DUMMY_NEWS}/>
    </>
  );
};

export default NewsPage;