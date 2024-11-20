'use client';

import styles from './NavLink.module.css';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const NavLink = ({href, children}) => {
  const path = usePathname();

  return <Link
    href={href}
    className={path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link}
  >{children}</Link>
}

export default NavLink