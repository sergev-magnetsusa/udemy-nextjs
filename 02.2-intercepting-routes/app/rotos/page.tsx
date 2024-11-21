import Link from 'next/link';

const RotosPage = () => {
  const photos: number[] = Array.from({length: 6}, (_, i) => i + 1);

  return (
    <section className="cards-container">
      {photos.map((id) => (
        <Link key={id} href={`/rotos/${id}`} className="card" passHref>
          Roto #{id}
        </Link>
      ))}
    </section>
  );
}

export default RotosPage