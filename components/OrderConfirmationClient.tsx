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
      <main className="pt-32 flex min-h-screen flex-col items-center justify-center p-6 text-center bg-[#FFF8E1]">
        <h1 className="text-5xl font-bold mb-4 text-[#6F4E37] font-serif">Order Not Found</h1>
        <p className="text-lg text-[#3E2723]/70 mb-8">There was an issue retrieving your order details. Please contact support if you believe this is an error.</p>
        <Link href="/">
          <button className="bg-[#6F4E37] hover:bg-[#3E2723] text-[#F5F5DC] font-bold py-3 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Go to Home
          </button>
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-32 flex min-h-screen flex-col items-center justify-center p-6 bg-[#FFF8E1]">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-10 text-center border border-[#F5F5DC]">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <i className="fas fa-check fa-3x text-green-500"></i>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-[#6F4E37] mb-4 font-serif">Order Placed Successfully!</h1>
        <p className="text-lg text-[#3E2723]/80 mb-8">Please complete your payment by scanning the QR code below.</p>

        <div className="mb-8 bg-[#F5F5DC]/10 p-6 rounded-xl border border-[#F5F5DC]/30">
          <h2 className="text-2xl font-bold text-[#3E2723] mb-4">Payment Details</h2>
          <p className="text-xl font-semibold text-[#3E2723] mb-2">Total Amount: <span className="text-[#6F4E37]">NPR {parseFloat(totalPrice).toFixed(2)}</span></p>
          <p className="text-lg text-[#3E2723] mb-4">Transaction ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-[#6F4E37]">{transactionId}</span></p>
          <p className="text-sm text-gray-500 mb-6 italic">Please include this Transaction ID in your payment note for validation.</p>

          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <Image
                src={citizenBankQrCodePath}
                alt="Citizen Bank Nepal QR Code"
                width={256}
                height={256}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="text-left inline-block bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-full max-w-md">
            <p className="text-lg text-[#3E2723] mb-1"><strong>Bank:</strong> Citizen Bank Nepal</p>
            <p className="text-lg text-[#3E2723]"><strong>Account Holder:</strong> Ranjana Achar Udhyog</p>
          </div>
        </div>

        <p className="text-[#3E2723]/70 mt-8 mb-6">Your order will be processed once payment is confirmed.</p>
        <Link href="/" className="inline-block">
          <button className="btn-coffee-primary">
            Go to Home
          </button>
        </Link>
      </div>
    </main>
  );
}
