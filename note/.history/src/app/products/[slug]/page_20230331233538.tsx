import { notFound } from 'next/navigation';

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
export default function pants({ params }: Props) {
  if (params.slug === 'nothing') notFound();
  return <div>{params.slug}바지 제품 설명 페이지</div>;
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product,
  }));
}
