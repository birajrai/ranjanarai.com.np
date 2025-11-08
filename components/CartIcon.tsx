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
    <Link href="/cart" className="fixed bottom-4 left-4 bg-[#EF4141] text-white p-3 rounded-full shadow-lg z-50 hover:bg-red-700 transition-colors duration-300">
          <i className="fas fa-shopping-cart fa-2x"></i>
          {clientTotalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-white text-[#EF4141] rounded-full text-xs w-6 h-6 flex items-center justify-center font-bold border-2 border-[#EF4141]">
              {clientTotalItems}
            </span>
          )}
        </Link>
  );
}
