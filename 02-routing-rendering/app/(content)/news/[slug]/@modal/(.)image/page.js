import {notFound, useRouter} from 'next/navigation';
import {getNewsItem} from '@/lib/news';
import ModalBackdrop from '@/components/ui/ModalBackdrop';

const InterceptedImagePage = async ({params}) => {

  const {slug} = await params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop/>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;