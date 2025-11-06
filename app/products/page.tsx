import React from 'react';
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-12">Our Delicious Pickles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}