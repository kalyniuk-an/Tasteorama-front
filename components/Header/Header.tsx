import Link from 'next/link';
import Image from 'next/image';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
      <Link href="/" aria-label="Home">
        <Image src="/logo.svg" alt="" width={165} height={46} /></Link>
      </div>
    </header>
  )
}