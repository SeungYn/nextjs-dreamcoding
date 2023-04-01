import { getProduct, getProducts } from '@/service/products';
import styles from './page.module.css';
import Link from 'next/link';

//export const revalidate = 3;

export default async function page() {
  // 서버 파일에 있는 제품의 리스트를 읽어와서 그걸 보여줌
  const products = await getProducts();

  return (
    <div>
      제품 소개 페이지
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </div>
  );
}
