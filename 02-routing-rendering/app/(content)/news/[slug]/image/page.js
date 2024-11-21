import {notFound} from 'next/navigation';
import {getNewsItem} from '@/lib/news';

const ImagePage = async ({params}) => {
  const {slug} = await params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  return <div className="fullscreen-image">
    <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
  </div>
}

export default ImagePage