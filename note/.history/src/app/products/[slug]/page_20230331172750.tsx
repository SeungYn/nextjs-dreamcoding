type Props = {
  params: {
    slug: string;
  };
};
export default function pants({ params }: Props) {
  return <div>{params.slug}바지 제품 설명 페이지</div>;
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product;
  }));
}
