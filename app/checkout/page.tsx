'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone';

export default function CheckoutPage() {
  const { cart, getTotalPrice, clearCart } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '', // Now optional
    phoneNumber: '', // New required field
    location: {
      latitude: null as number | null,
      longitude: null as number | null,
      address: '' as string | null, // Human-readable address from reverse geocoding
    },
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    location: '',
  });

  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState('');
  const [mapUrl, setMapUrl] = useState(''); // New state for map URL

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleLocationShare = () => {
    if (navigator.geolocation) {
      setLocationLoading(true);
      setLocationError('');
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const address = `Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`;
          setFormData((prev) => ({
            ...prev,
            location: { latitude, longitude, address },
          }));
          // Construct OpenStreetMap iframe URL
          const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01},${latitude - 0.01},${longitude + 0.01},${latitude + 0.01}&layer=mapnik&marker=${latitude},${longitude}`;
          setMapUrl(osmUrl);
          setLocationLoading(false);
        },
        (error) => {
          console.error('Geolocation error:', error);
          setLocationError('Unable to retrieve your location. Please enable location services and try again.');
          setLocationLoading(false);
          setMapUrl(''); // Clear map if location fails
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      setLocationError('Geolocation is not supported by your browser.');
      setMapUrl(''); // Clear map if geolocation not supported
    }
  };

  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
      isValid = false;
    }
    if (formData.email.trim() && !isEmail(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      isValid = false;
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
      isValid = false;
    } else if (!isMobilePhone(formData.phoneNumber, 'any')) { // 'any' locale for broad international numbers
      newErrors.phoneNumber = 'Phone Number is invalid.';
      isValid = false;
    }
    if (formData.location.latitude === null || formData.location.longitude === null) {
      newErrors.location = 'Location is required. Please share your location.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ formData, cart }),
        });

        const data = await response.json();

        if (response.ok) {
          const totalPrice = getTotalPrice().toFixed(2);
          toast.success(data.message);
          clearCart();
          router.push(`/order-confirmation?transactionId=${data.transactionId}&totalPrice=${totalPrice}`);
        } else {
          toast.error(`Error: ${data.message}`);
        }
      } catch (error) {
        console.error('Error submitting order:', error);
        toast.error('An unexpected error occurred. Please try again.');
      }
    } else {
      console.log('Form has validation errors.');
    }
  };

  if (cart.length === 0) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-lg text-gray-600 mb-8">Please add items to your cart before checking out.</p>
        <Link href="/products">
          <button className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105">
            Start Shopping
          </button>
        </Link>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8">Checkout</h1>
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shipping Information Form */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-lg font-medium text-gray-700">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none ${
                  errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary focus:border-primary'
                }`}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email (Optional):</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none ${
                  errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary focus:border-primary'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-lg font-medium text-gray-700">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none ${
                  errors.phoneNumber ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary focus:border-primary'
                }`}
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Delivery Location:</label>
              <button
                type="button"
                onClick={handleLocationShare}
                disabled={locationLoading}
                className="mt-1 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-sm transition duration-300 ease-in-out"
              >
                {locationLoading ? 'Getting Location...' : 'Share My Current Location'}
              </button>
              {formData.location.address && (
                <p className="mt-2 text-gray-700">
                  Location: {formData.location.address}
                </p>
              )}
              {locationError && <p className="text-red-500 text-sm mt-1">{locationError}</p>}
              {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
            </div>
            {mapUrl && (
              <div className="w-full h-64 mt-4 rounded-lg overflow-hidden shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src={mapUrl}
                  title="Delivery Location Map"
                ></iframe>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-xl transition duration-300 ease-in-out transform hover:scale-105 mt-6"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center">
                  <Image src={item.image} alt={item.name} width={50} height={50} className="rounded-md mr-2" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold">NPR {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-300">
            <p className="text-xl font-bold">Total:</p>
            <p className="text-xl font-bold">NPR {getTotalPrice().toFixed(2)}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
