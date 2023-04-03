'use client';

import { useRouter } from 'next/router';

export default function Button() {
  const router = useRouter();
  return <button onClick={() => {}}>버튼</button>;
}
