import NewsList from '@/components/news/NewsList';
import {getAllNews} from '@/lib/news';

const NewsPage = async () => {

  const news = await getAllNews();

  // if (isLoading) {
  //   return <p>Loading...</p>
  // }
  //
  // if (error) {
  //   return <p>Error: {error}</p>
  // }


  return (
    <>
      <h1>News</h1>
      <NewsList news={news}/>
    </>
  );
};

export default NewsPage;