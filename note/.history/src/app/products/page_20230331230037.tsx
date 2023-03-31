export default function page() {
  return (
    <div>
      제품 소개 페이지
      <ul>
        <li>
          <Link href='/products/shirt'>shirt</Link>
          <Link href='/products/pants'>pants</Link>
          <Link href='/products/skirt'>skirt</Link>
          <Link href='/products/choes'>choes</Link>
        </li>
      </ul>
    </div>
  );
}
