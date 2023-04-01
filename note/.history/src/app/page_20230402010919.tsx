import { notFound } from 'next/navigation';
import { useEffect } from 'react';
export default function Home() {
  useEffect(() => {
    console.log(123);
  }, []);
  return <h1>홈페이지</h1>;
}
