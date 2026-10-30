import Image from 'next/image';
import css from './RecipeCard.module.css';
import Link from 'next/link';
import { Recipe } from '@/types/recipe';

type Props = {
  recipe: Recipe;
}

export default function RecipeCard({recipe}:Props) {
  return (
    <div>
      <Image
        src={recipe.thumb}
        alt={recipe.title}
        width={264}
        height={178}
        className={css.image}
      />
      <div>
        <p>{recipe.title}</p>
        <div>
          <Image
            src="/clock.svg"
            alt=""
            width={24}
            height={24}
          />
          <p>clock</p>
          <p className={css.desc}>desc</p>
          <p className={ css.cal}></p>
          <div>
            <Link className={css.link} href={`/recipes/id`} >Lean more</Link>
            <button>f</button>
          </div>
        </div>
      </div>
    </div>
  )
}