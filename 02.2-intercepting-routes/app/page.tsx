import Link from 'next/link';

const RootPage = () => {

  return (
    <section>
      <ul>
        <li>
          <Link href="/photos">Photos</Link>
        </li>
        <li>
          <Link href="/news/home/test/d">News</Link>
        </li>
        <li>
          <Link href="/rotos">Rotos</Link>
        </li>
      </ul>
    </section>
  )
}

export default RootPage