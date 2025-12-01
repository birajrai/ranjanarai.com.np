'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <main className="pt-32 flex min-h-screen flex-col items-center justify-center p-6 text-center bg-[#FFF8E1]">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-shopping-basket fa-7x text-[#6F4E37]/20 mb-8"></i>
          <h1 className="text-5xl font-bold mb-4 text-[#6F4E37] font-serif">Your Cart is Empty</h1>
          <p className="text-xl text-[#3E2723]/70 mb-10">Looks like you haven&apos;t added any delicious pickles yet.</p>
          <Link href="/products">
            <button className="bg-[#6F4E37] hover:bg-[#3E2723] text-[#F5F5DC] font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Start Shopping
            </button>
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="pt-32 flex min-h-screen flex-col items-center p-6 bg-[#FFF8E1]">
      <h1 className="text-5xl font-bold mb-12 text-[#6F4E37] font-serif">Your Shopping Cart</h1>
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#F5F5DC]">
        <div className="space-y-8">
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="flex flex-col md:flex-row items-center border-b border-gray-100 pb-6 last:border-b-0"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 mb-4 md:mb-0">
                  <Image src={item.image} alt={item.name} fill className="object-cover rounded-xl" />
                </div>
                <div className="flex-grow md:ml-6 text-center md:text-left w-full">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-2">
                    <h2 className="text-2xl font-bold text-[#3E2723]">{item.name}</h2>
                    <p className="text-xl font-bold text-[#6F4E37] mt-2 md:mt-0">NPR {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <p className="text-gray-500 mb-4">Unit Price: NPR {item.price.toFixed(2)}</p>

                  <div className="flex items-center justify-center md:justify-between">
                    <div className="flex items-center bg-[#F5F5DC] rounded-lg overflow-hidden border border-gray-200">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-4 py-2 text-[#3E2723] hover:bg-gray-200 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 text-[#3E2723] font-medium min-w-[3rem] text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-4 py-2 text-[#3E2723] hover:bg-gray-200 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-6 text-red-500 hover:text-red-700 font-medium text-sm underline decoration-red-500/30 hover:decoration-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#3E2723]">Total Amount</h2>
            <p className="text-4xl font-bold text-[#6F4E37]">NPR {getTotalPrice().toFixed(2)}</p>
          </div>

          <div className="flex flex-col md:flex-row justify-end space-y-4 md:space-y-0 md:space-x-6">
            <button
              onClick={clearCart}
              className="btn-coffee-secondary"
            >
              Clear Cart
            </button>
            <Link href="/checkout" className="w-full md:w-auto">
              <button className="w-full md:w-auto btn-coffee-primary">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
