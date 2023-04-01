'use client';
import styles from './MeowArticle.module.css';
export default async function MeowArticle() {
  const res = await fetch('https://meowfacts.herokuapp.com', {
    next: { revalidate: 3 },
  });
  const data = await res.json();
  const factText = data.data[0];
  return <article className={styles.article}>{factText}</article>;
}
