'use client';

import React from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <Link href={`/product/${product.slug}`}>
      <div
        key={product.id}
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
      >
        <Image
          src={product.image}
          alt={product.name}
          width={256}
          height={180}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="font-bold text-2xl mb-2 text-gray-800">{product.name}</h2>
          <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          <p className="text-gray-700 text-sm">Spice Level: {product.spiceLevel}</p>
          <div className="flex items-baseline mt-2">
            {product.discount ? (
              <p className="text-lg font-semibold text-gray-800 mr-2">
                NPR {discountedPrice.toFixed(2)}
              </p>
            ) : null}
            <p
              className={`text-gray-600 ${
                product.discount ? "line-through" : "font-semibold text-lg"
              }`}
            >
              NPR {product.price.toFixed(2)}
            </p>
          </div>
          <p className="text-sm text-gray-500 mt-1">Stock: {product.stock}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
