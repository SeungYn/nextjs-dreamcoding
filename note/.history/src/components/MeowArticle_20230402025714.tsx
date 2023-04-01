'use client';
import { useState } from 'react';
import styles from './MeowArticle.module.css';
export default async function MeowArticle() {
  const [text, setText] = useState('');
  const res = await fetch('https://meowfacts.herokuapp.com', {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  const factText = data.data[0];
  return <article className={styles.article}>{text}</article>;
}
