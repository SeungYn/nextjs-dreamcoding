import Link from 'next/link';
import styles from './layout.module.css';

type props = {
  children: React.ReactNode;
};

export default function Layout({ children }: props) {
  return (
    <div>
      <nav className={styles.nav}>
        <Link href='/products/woman'>여성옷</Link>
        <Link href='/products/man'>남성옷</Link>
      </nav>
    </div>
  );
}
