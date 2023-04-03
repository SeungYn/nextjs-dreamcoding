import Counter from '@/components/Counter';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function Home() {
  return (
    <>
      <h1>홈페이지</h1>
      <Counter />
      <Image
        src='https://images.unsplash.com/photo-1441986300917-64674bd600d8'
        alt='이미지2'
        width={400}
        height={400}
      />
    </>
  );
}
