import Link from 'next/link';
import styles from './layout.module.css';

type props = {
  children: React.ReactNode;
  params: any;
};

export default function Layout({ children, params }: props) {
  console.log(params);
  return (
    <div>
      <nav className={styles.nav}>
        <Link href='/products/woman'>여성옷</Link>
        <Link href='/products/man'>남성옷</Link>
      </nav>
      <ul>
        <li>
          <Link href='/products/shirt'>shirt</Link>
          <Link href='/products/pants'>pants</Link>
          <Link href='/products/skirt'>skirt</Link>
          <Link href='/products/choes'>choes</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
