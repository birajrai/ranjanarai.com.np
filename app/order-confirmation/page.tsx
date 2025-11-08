import React, { Suspense } from 'react';
import OrderConfirmationClient from '@/components/OrderConfirmationClient';

export default function OrderConfirmationPage() {
  return (
    <Suspense fallback={
      <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Loading Order Details...</h1>
        <p className="text-lg text-gray-600 mb-8">Please wait while we load your order confirmation.</p>
      </main>
    }>
      <OrderConfirmationClient />
    </Suspense>
  );
}
