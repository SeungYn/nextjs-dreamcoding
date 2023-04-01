import { getProduct, getProducts, Product } from '@/service/products';
import Link from 'next/link';
import MeowArticle from '@/components/MeowArticle';

type Props = {
  products: Product[];
};

export default async function page({ products }: Props) {
  console.log(products);
  return (
    <div>
      제품 소개 페이지
      <ul>
        x
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
  return {
    props: { products },
  };
}
