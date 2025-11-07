import { productMetadata } from '../../../app/metadata';
import { products } from '@/data/products';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const product = products.find((p) => p.id === Number(params.slug));
  if (!product) {
    return {};
  }
  return productMetadata(product.name);
}

export default function ProductSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
