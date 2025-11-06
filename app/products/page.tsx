"use client";
import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(query)
      )
    );
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6">Our Delicious Pickles</h1>
      <div className="mb-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Search by name or ingredients..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}