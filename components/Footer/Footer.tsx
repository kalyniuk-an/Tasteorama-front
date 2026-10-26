import Link from 'next/link';
import Image from 'next/image';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
      <Link href="/" aria-label="Home">
        <Image src="/logo.svg" alt="" width={165} height={46} /></Link>
      <p className={css.copyright}>© 2025 CookingCompanion. All rights reserved.</p>
        <nav aria-label="Main Navigation">
        <ul className={css.nav} >
          <li><Link href="/">Recipes</Link></li>
          <li><Link href="/me">Account</Link></li>
        </ul>
        </nav>
      </div>
    </footer>
  )
}