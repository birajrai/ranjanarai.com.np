'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartIcon() {
  const { getTotalItems } = useCart();
  const [clientTotalItems, setClientTotalItems] = useState(0);

  useEffect(() => {
    setClientTotalItems(getTotalItems());
  }, [getTotalItems]);

  return (
    <Link href="/cart" className="relative group">
      <div className="p-2 rounded-full hover:bg-[#F5F5DC]/50 transition-colors duration-300">
        <i className="fas fa-shopping-cart fa-lg text-[#3E2723] group-hover:text-[#6F4E37] transition-colors duration-300"></i>
        {clientTotalItems > 0 && (
          <span className="absolute top-0 right-0 bg-[#6F4E37] text-[#F5F5DC] text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-[#FFF8E1] shadow-sm transform translate-x-1/4 -translate-y-1/4">
            {clientTotalItems}
          </span>
        )}
      </div>
    </Link>
  );
}
