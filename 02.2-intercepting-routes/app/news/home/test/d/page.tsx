import Link from 'next/link';

const NewsHomeTest2Page = () => {
  const photos: number[] = Array.from({length: 9}, (_, i) => i + 1);

  return (
    <section className="cards-container">
      {photos.map((id) => (
        <Link key={id} href={`/photos/${id}`} className="card" passHref>
          News {id}
        </Link>
      ))}
    </section>
  );
}

export default NewsHomeTest2Page