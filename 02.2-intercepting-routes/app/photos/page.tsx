import Link from 'next/link';

const Photos = () => {
  const photos: number[] = Array.from({length: 6}, (_, i) => i + 1);

  return (
    <section className="cards-container">
      {photos.map((id) => (
        <Link key={id} href={`/photos/${id}`} className="card" passHref>
          {id}
        </Link>
      ))}
    </section>
  );
}

export default Photos