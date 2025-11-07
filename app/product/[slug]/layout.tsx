import { productMetadata } from '../../../app/metadata';
import { products } from '@/data/products';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.id === Number(slug));
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
