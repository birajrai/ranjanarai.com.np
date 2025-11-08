'use client';

import React from "react";
import Image from "next/image";
import { calculateDiscountedPrice } from "@/lib/utils";
import { Product } from "@/data/products";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountedPrice = calculateDiscountedPrice(product);

  return (
    <Link href={`/product/${product.slug}`}>
      <div
        key={product.id}
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
      >
        <Image
          src={product.image}
          alt={product.name}
          width={256}
          height={180}
          className="w-full h-48 object-cover"
        />
        <div className="p-3">
          <h2 className="font-bold text-xl mb-1 text-[#EF4141]">{product.name}</h2>
          <p className="text-gray-600 text-xs mb-1">{product.description}</p>
          <p className="text-gray-700 text-sm mb-1">Spice Level: {product.spiceLevel}</p>
          <div className="flex items-baseline justify-between mt-2">
            <div className="flex items-baseline">
              {product.discount ? (
                <p className="text-base font-semibold text-[#333333] mr-1">
                  NPR {discountedPrice.toFixed(2)}
                </p>
              ) : null}
              <p
                className={`text-gray-600 ${
                  product.discount ? "line-through text-sm" : "font-semibold text-base"
                }`}
              >
                NPR {product.price.toFixed(2)}
              </p>
            </div>
            <p className="text-xs text-gray-500">Stock: {product.stock}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
