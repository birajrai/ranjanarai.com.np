import React from 'react';
import Image from 'next/image';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { productMetadata } from '../../metadata';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug);
  
    if (!product) {
      return {};
    }
  
    return productMetadata(product.name);
  }

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

import ProductDetails from '@/components/ProductDetails';

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": product.name,
            "image": product.image,
            "description": product.description,
            "sku": product.id,
            "brand": {
              "@type": "Brand",
              "name": "Ranjana Achar Udhyog"
            },
            "offers": {
              "@type": "Offer",
              "url": `https://ranjanaarai.com/product/${product.slug}`,
              "priceCurrency": "NPR",
              "price": product.discount ? (product.price - (product.price * product.discount) / 100).toFixed(2) : product.price.toFixed(2),
              "itemCondition": "https://schema.org/NewCondition",
              "availability": Number(product.stock) > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
            }
          })
        }}
      />
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <ProductDetails product={product} />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
        <div className="grid grid-cols-3 gap-4">
          {product.gallery.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`${product.name} gallery image ${index + 1}`}
              width={150}
              height={150}
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