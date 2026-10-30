import css from './RecipesList.module.css';
import RecipeCard from '../RecipeCard/RecipeCard';
import type { Recipe } from '@/types/recipe';

interface RecipesListProps{
  recipes: Recipe[];
}

export default function RecipesList({ recipes }: RecipesListProps) {
  
  return (
    <ul className={css.list}>
      {recipes.map((recipe) =>
        <li key={recipe._id} className={css.recipesItem}>
          <RecipeCard recipe={recipe} />
      </li>)}
      
    </ul>
  )
}