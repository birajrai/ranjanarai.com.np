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
    <Link href="/cart" className="relative text-gray-800 hover:text-primary">
      <i className="fas fa-shopping-cart fa-lg"></i>
      {clientTotalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {clientTotalItems}
        </span>
      )}
    </Link>
  );
}
