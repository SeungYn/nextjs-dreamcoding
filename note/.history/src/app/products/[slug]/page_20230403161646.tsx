import { getProduct, getProducts } from '@/service/products';
import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';

export const revalidate = 3;

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

type Props = {
  params: {
    slug: string;
  };
};
export default async function pants({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    redirect('/products');
  }
  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return (
    <>
      <div>{product.name}제품 설명 페이지</div>
      <Image
        src={`/images/${product.identifier}.jpg`}
        width='300'
        height='300'
        alt='옷들 이미지'
      />
      <button onClick={() => {}}>123</button>
    </>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.name,
  }));
}
