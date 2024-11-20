import Link from 'next/link';
import logoImg from '@/assets/logo.png';

import styles from './MainHeader.module.css';
import Image from 'next/image';
import MainHeaderBackground from '@/app/components/main-header/MainHeaderBackground';
import NavLink from '@/app/components/main-header/NavLink';

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground/>

      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image
            src={logoImg}
            alt="A plate with food on it"
            width={40}
            height={40}
            priority
          />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Food Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default MainHeader