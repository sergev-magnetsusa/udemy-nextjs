import styles from './page.module.css';
import Link from 'next/link';
import MealsGrid from '@/app/components/meals/MealsGrid';
import {Suspense} from 'react';
import LoadingOut from '@/app/meals/loading-out';

const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our community',
};

const MealsPage = () => {

  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created {' '}
          <span className={styles.highlight}>by you </span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href={'/meals/share'}>
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<LoadingOut/>}>
          <MealsGrid/>
        </Suspense>
      </main>
    </>
  )
}

export {metadata}
export default MealsPage
