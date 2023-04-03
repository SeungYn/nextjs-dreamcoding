'use client';

import { useRouter } from 'next/navigation';

export default function Button() {
  const router = useRouter();
  return <button onClick={() => {}}>버튼</button>;
}
