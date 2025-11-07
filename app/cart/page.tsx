'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
        <i className="fas fa-shopping-cart fa-5x text-gray-400 mb-6"></i>
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-lg text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/products">
          <button className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105">
            Start Shopping
          </button>
        </Link>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-8">Your Shopping Cart</h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border-b pb-4">
              <Image src={item.image} alt={item.name} width={100} height={100} className="rounded-lg mr-4" />
              <div className="flex-grow">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-600">NPR {item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-md hover:bg-gray-300 transition-colors duration-200"
                  >
                    -
                  </button>
                  <span className="bg-gray-100 text-gray-800 px-4 py-1 border-t border-b border-gray-200">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-md hover:bg-gray-300 transition-colors duration-200"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="text-lg font-bold">NPR {(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-8 pt-4 border-t">
          <h2 className="text-2xl font-bold">Total:</h2>
          <p className="text-2xl font-bold">NPR {getTotalPrice().toFixed(2)}</p>
        </div>
        <div className="flex justify-end mt-6 space-x-4">
          <button
            onClick={clearCart}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full text-xl transition duration-300"
          >
            Clear Cart
          </button>
          <Link href="/checkout">
            <button className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
