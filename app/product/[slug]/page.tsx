import React from 'react';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-gray-800 text-xl font-semibold mb-2">Spice Level: {product.spiceLevel}</p>
          <div className="flex items-baseline mb-4">
            {product.discount ? (
              <p className="text-2xl font-bold text-gray-800 mr-2">
                ${(product.price - (product.price * product.discount) / 100).toFixed(2)}
              </p>
            ) : null}
            <p
              className={`text-xl text-gray-600 ${product.discount ? "line-through" : "font-bold"}`}
            >
              ${product.price.toFixed(2)}
            </p>
          </div>
          <p className="text-gray-700 text-lg mb-4">Stock: {product.stock}</p>
          <button className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}