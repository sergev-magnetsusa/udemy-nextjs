import Modal from '@/app/@modal/(.)photos/[id]/modal';

interface IProps {
  params: Promise<{id: string}>;
}

const Page = async ({params}: IProps) => {
  const {id: photoId} = await params;
  return <Modal>{photoId}</Modal>
}

export default Page