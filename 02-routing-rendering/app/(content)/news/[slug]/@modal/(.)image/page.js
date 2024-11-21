'use client';

import {DUMMY_NEWS} from '@/dummy-news';
import {notFound, useRouter} from 'next/navigation';

const InterceptedImagePage = async ({params}) => {
  const router = useRouter();

  const {slug} = await params;
  const newsItem = DUMMY_NEWS.find(item => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back}></div>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;