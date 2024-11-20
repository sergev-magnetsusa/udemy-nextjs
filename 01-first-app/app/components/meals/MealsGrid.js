import styles from './MealsGrid.module.css';
import MealItem from '@/app/components/meals/MealItem';
import {getMeals} from '@/lib/meals';

const MealsGrid = async () => {
  const meals = await getMeals();

  return (
    <ul className={styles.meals}>
      {meals.map(meal => (
        <li key={meal.id}>
          <MealItem {...meal}/>
        </li>
      ))}
    </ul>
  );
}

export default MealsGrid
