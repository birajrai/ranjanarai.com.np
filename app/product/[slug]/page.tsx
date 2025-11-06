import React from 'react';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';

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

  const relatedProducts = products.filter(
    (p) =>
      p.category === product.category &&
      p.spiceLevel === product.spiceLevel &&
      p.id !== product.id
  );

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg mt-8">
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
          <p className="text-gray-800 text-xl font-semibold mb-2">Ingredients: {product.ingredients.join(', ')}</p>
          <div className="flex items-baseline mb-4">
            {product.discount ? (
              <p className="text-2xl font-bold text-gray-800 mr-2">
                                NPR {(product.price - (product.price * product.discount) / 100).toFixed(2)}
              </p>
            ) : null}
            <p
              className={`text-xl text-gray-600 ${product.discount ? "line-through" : "font-bold"}`}
            >
                            NPR {product.price.toFixed(2)}
            </p>
          </div>
          <p className="text-gray-700 text-lg mb-4">Stock: {product.stock}</p>
          <p className="text-gray-700 text-lg mb-4">Weight: {product.weight}</p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
            Order Now
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
        <div className="grid grid-cols-3 gap-4">
          {product.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} gallery image ${index + 1}`}
              className="rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
      {relatedProducts.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}