// import Image from 'next/image';
import css from './RecipeCard.module.css';
import Link from 'next/link';

export default function RecipeCard() {
  return (
    <div>
      {/* <Image
        src={'/' }
        alt=''
        className='css.image'
      /> */}
      <div>
        <p>vffgdsg</p>
        <div>
          <svg className={css.clock} src='/public/clock.svg' width={24} height={24}></svg>
          <p>clock</p>
          <p className={css.desc}>desc</p>
          <p className={ css.cal}></p>
          <div>
            <Link className={css.link} href={`/recipes/id`} >View details</Link>
            <button>f</button>
          </div>
        </div>
      </div>
    </div>
  )
}