import styles from './page.module.css';
import Image from 'next/image';
import {getMeal} from '@/lib/meals';
import {notFound} from 'next/navigation';

const generateMetadata = async ({params}) => {
  const {slug} = await params;
  const meal = getMeal(slug);

  if (!meal) {
    notFound();
  }

  return {
    title: meal.title,
    description: meal.summary,
  }
}

const MealPage = async ({params}) => {
  const {slug} = await params;
  const meal = await getMeal(slug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} alt={meal.title} fill/>
        </div>
        <div className={styles.headerText}>
          <h1>TITLE</h1>
          <p className={styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>${meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={styles.main}>
        <p className={styles.instructions} dangerouslySetInnerHTML={{
          __html: meal.instructions,
        }}></p>
      </main>
    </>
  )
}

export {generateMetadata}
export default MealPage