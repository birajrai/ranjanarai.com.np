import { productsMetadata } from '../metadata';

export const metadata = productsMetadata;

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
