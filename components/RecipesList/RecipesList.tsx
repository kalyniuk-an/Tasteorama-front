import css from './RecipesList.module.css';
import RecipeCard from '../RecipeCard/RecipeCard';
// import type { Recipe } from '@/types/recipe';

// interface RecipesListProps{
//   recipes: [];
// }{ recipes }: RecipesListProps

export default function RecipesList() {
  
  return (
    <ul className={css.list}>
      <RecipeCard/>
    </ul>
  )
}