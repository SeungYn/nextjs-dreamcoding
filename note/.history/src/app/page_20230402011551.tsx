import Counter from '@/components/Counter';
import { notFound } from 'next/navigation';

export default function Home() {
  return (
    <>
      <h1>홈페이지</h1>
      <Counter />
    </>
  );
}
