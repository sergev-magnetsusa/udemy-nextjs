export const dynamicParams = false;

export const generateStaticParams = () => {
  const slugs = ['1', '2', '3', '4', '5', '6'];
  return slugs.map((slug) => ({id: slug}));
}

interface Props {
  params: Promise<{id: string}>
}

const PhotoDetailPage = async ({params}: Props) => {
  const {id} = await params;
  return (
    <div className="card">{id}</div>
  )
}

export default PhotoDetailPage