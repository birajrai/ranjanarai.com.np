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
      <div className="group bg-gradient-to-b from-[#F5F5DC] to-[#E8E8C8] rounded-2xl border-4 border-[#D7CCC8] shadow-[0_8px_0_#BCAAA4] hover:shadow-[0_4px_0_#BCAAA4] hover:translate-y-1 transition-all duration-150 overflow-hidden cursor-pointer">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-b from-[#D4A574] to-[#C19A6B] p-2">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-56 object-cover rounded-xl border-4 border-[#6F4E37] group-hover:scale-110 transition-transform duration-300"
          />
          {/* Discount Badge */}
          {product.discount && (
            <div className="absolute top-4 right-4 bg-gradient-to-b from-[#FF6B6B] to-[#EE5A6F] text-white font-black px-4 py-2 rounded-lg border-3 border-[#C92A2A] shadow-[0_4px_0_#8B1E1E] text-sm uppercase tracking-wide">
              -{product.discount}% OFF
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Product Name */}
          <h2 className="font-black text-2xl mb-2 text-[#3E2723] uppercase tracking-tight" style={{ textShadow: '2px 2px 0px rgba(62,39,35,0.1)' }}>
            {product.name}
          </h2>

          {/* Description */}
          <p className="text-[#3E2723]/70 text-sm mb-3 font-semibold line-clamp-2">
            {product.description}
          </p>

          {/* Spice Level */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-black text-[#3E2723] uppercase tracking-wide">Spice:</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-lg ${i < parseInt(product.spiceLevel) ? 'text-[#FF6B6B]' : 'text-gray-300'}`}>
                  🌶️
                </span>
              ))}
            </div>
          </div>

          {/* Price & Stock */}
          <div className="flex items-end justify-between pt-3 border-t-2 border-[#D7CCC8]">
            <div className="flex flex-col">
              {product.discount ? (
                <>
                  <span className="text-sm font-bold text-[#3E2723]/50 line-through">
                    NPR {product.price.toFixed(2)}
                  </span>
                  <span className="text-2xl font-black text-[#6F4E37]">
                    NPR {discountedPrice.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-2xl font-black text-[#6F4E37]">
                  NPR {product.price.toFixed(2)}
                </span>
              )}
            </div>
            <div className="px-3 py-1 bg-gradient-to-b from-[#8B5E3C] to-[#6F4E37] text-[#FFF8E1] font-bold text-xs rounded-lg border-2 border-[#5D4037] uppercase tracking-wide">
              Stock: {product.stock}
            </div>
          </div>

          {/* View Button */}
          <button className="w-full mt-4 px-6 py-3 bg-gradient-to-b from-[#8B5E3C] to-[#6F4E37] text-[#FFF8E1] font-black text-base rounded-lg border-4 border-[#5D4037] shadow-[0_4px_0_#4E342E] hover:shadow-[0_2px_0_#4E342E] hover:translate-y-0.5 active:shadow-none active:translate-y-1 transition-all duration-150 uppercase tracking-wide">
            View Details →
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
