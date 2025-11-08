'use client';

import React, { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';


export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.ingredients.join(', ').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <h1 className="text-5xl font-bold mb-12 text-[#EF4141]">Our Delicious Pickles</h1>
      <div className="mb-10 w-full max-w-md">
        <input
          type="text"
          placeholder="Search by name or ingredients..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EF4141]"
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