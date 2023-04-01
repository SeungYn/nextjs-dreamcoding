import MeowArticle from '@/components/MeowArticle';
import { getProduct, getProducts, Product } from '@/service/products';
import Link from 'next/link';

type Props = {
  products: Product[];
};

export default function SSGPage({ products }: Props) {
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

export async function getStaticProps() {
  const products = await getProducts();
  console.log(products);
  return {
    props: { products },
  };
}
