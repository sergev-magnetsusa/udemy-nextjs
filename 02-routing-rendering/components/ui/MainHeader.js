import Link from 'next/link';
import NavLink from '@/components/ui/NavLink';

const MainHeader = () => {

  return <header id="main-header">
    <div id="logo">
      <Link href="/">
        NextNews
        {/*<Image src="/logo.png" alt="News" width={592} height={592} />*/}
      </Link>
    </div>

    <nav>
      <ul>
        <li>
          <NavLink href="/news">News</NavLink>
        </li>
        <li>
          <NavLink href="/archive">Archive</NavLink>
        </li>
      </ul>
    </nav>
  </header>
}

export default MainHeader