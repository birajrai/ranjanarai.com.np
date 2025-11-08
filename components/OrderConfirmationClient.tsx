'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function OrderConfirmationClient() {
  const searchParams = useSearchParams();
  const transactionId = searchParams.get('transactionId');
  const totalPrice = searchParams.get('totalPrice');

  // Placeholder for Citizen Bank Nepal QR Code image
  const citizenBankQrCodePath = '/citizen_bank_qr.png'; // User needs to place their actual QR code image here

  if (!transactionId || !totalPrice) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Order Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">There was an issue retrieving your order details. Please contact support if you believe this is an error.</p>
        <Link href="/">
          <button className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105">
            Go to Home
          </button>
        </Link>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h1>
        <p className="text-lg text-gray-600 mb-6">Please complete your payment by scanning the QR code below.</p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Details</h2>
          <p className="text-xl font-semibold text-gray-700 mb-2">Total Amount: NPR {parseFloat(totalPrice).toFixed(2)}</p>
          <p className="text-xl font-semibold text-gray-700 mb-4">Transaction ID: <span className="text-primary">{transactionId}</span></p>
          <p className="text-gray-600 mb-4">Please include this Transaction ID in your payment note for validation.</p>

          <div className="flex justify-center mb-6">
            <Image
              src={citizenBankQrCodePath}
              alt="Citizen Bank Nepal QR Code"
              width={256} // Adjust width and height as needed for your QR code image
              height={256}
              className="rounded-lg shadow-md"
            />
          </div>

          <div className="text-left inline-block">
            <p className="text-lg text-gray-700"><strong>Bank:</strong> Citizen Bank Nepal</p>
            <p className="text-lg text-gray-700"><strong>Account Holder:</strong> Ranjana Achar Udhyog</p>
          </div>
        </div>

        <p className="text-gray-600 mt-8">Your order will be processed once payment is confirmed.</p>
        <Link href="/" className="mt-6 inline-block bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105">
          Go to Home
        </Link>
      </div>
    </main>
  );
}
