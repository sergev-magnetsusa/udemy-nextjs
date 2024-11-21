import RotoModal from '@/app/@modal/(.)rotos/[id]/RotoModal';

interface IProps {
  params: Promise<{id: string}>;
}

const RotoPage = async ({params}: IProps) => {
  const {id: rotoId} = await params;
  return <RotoModal>Roto {rotoId} in Modal</RotoModal>
}

export default RotoPage