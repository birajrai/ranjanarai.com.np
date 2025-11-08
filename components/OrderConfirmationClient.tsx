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
      <main className="pt-24 flex min-h-screen flex-col items-center justify-center p-6 text-center">
        <h1 className="text-5xl font-bold mb-4 text-[#EF4141]">Order Not Found</h1>
        <p className="text-lg text-[#444444] mb-8">There was an issue retrieving your order details. Please contact support if you believe this is an error.</p>
        <Link href="/">
          <button className="bg-[#EF4141] hover:bg-red-700 text-[#FFFFFF] font-bold py-3 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105">
            Go to Home
          </button>
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-24 flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-10 text-center">
        <h1 className="text-5xl font-bold text-[#EF4141] mb-6">Order Placed Successfully!</h1>
        <p className="text-lg text-[#444444] mb-8">Please complete your payment by scanning the QR code below.</p>

        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#444444] mb-4">Payment Details</h2>
          <p className="text-xl font-semibold text-[#444444] mb-2">Total Amount: NPR {parseFloat(totalPrice).toFixed(2)}</p>
          <p className="text-xl font-semibold text-[#444444] mb-4">Transaction ID: <span className="text-[#EF4141]">{transactionId}</span></p>
          <p className="text-[#444444] mb-4">Please include this Transaction ID in your payment note for validation.</p>

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
            <p className="text-lg text-[#444444]"><strong>Bank:</strong> Citizen Bank Nepal</p>
            <p className="text-lg text-[#444444]"><strong>Account Holder:</strong> Ranjana Achar Udhyog</p>
          </div>
        </div>

        <p className="text-[#444444] mt-8">Your order will be processed once payment is confirmed.</p>
        <Link href="/" className="mt-6 inline-block bg-[#EF4141] hover:bg-red-700 text-[#FFFFFF] font-bold py-3 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105">
          Go to Home
        </Link>
      </div>
    </main>
  );
}
