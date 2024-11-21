
interface Props {
  params: Promise<{id: string}>
}

const RotoDetailPage = async ({params}: Props) => {
  const {id: rotoId} = await params;
  return (
    <div className="card">Roto #{rotoId}</div>
  )
}

export default RotoDetailPage