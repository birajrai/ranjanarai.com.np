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
      <main className="pt-32 flex min-h-screen flex-col items-center justify-center p-6 bg-[#FFF8E1] text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#6F4E37] font-serif">Your Cart is Empty</h1>
        <p className="text-lg text-[#3E2723]/70 mb-8">Please add items to your cart before checking out.</p>
        <Link href="/products">
          <button className="bg-[#6F4E37] hover:bg-[#3E2723] text-[#F5F5DC] font-bold py-3 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Start Shopping
          </button>
        </Link>
      </main>
    );
  }

  return (
    <main className="pt-32 flex min-h-screen flex-col items-center justify-center p-6 bg-[#FFF8E1]">
      <h1 className="text-5xl font-bold mb-12 text-[#6F4E37] font-serif">Checkout</h1>
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-[#F5F5DC]">
        {/* Shipping Information Form */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-6 text-[#3E2723] border-b border-gray-200 pb-2">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-lg font-medium text-[#3E2723] mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none transition-colors ${errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary focus:border-[#6F4E37]'
                  }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-[#3E2723] mb-1">Email (Optional)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none transition-colors ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary focus:border-[#6F4E37]'
                  }`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-lg font-medium text-[#3E2723] mb-1">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`mt-1 block w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none transition-colors ${errors.phoneNumber ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary focus:border-[#6F4E37]'
                  }`}
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
            </div>
            <div>
              <label className="block text-lg font-medium text-[#3E2723] mb-2">Delivery Location</label>
              <button
                type="button"
                onClick={handleLocationShare}
                disabled={locationLoading}
                className="w-full btn-coffee-secondary flex items-center justify-center"
              >
                {locationLoading ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i> Getting Location...
                  </>
                ) : (
                  <>
                    <i className="fas fa-map-marker-alt mr-2"></i> Share My Current Location
                  </>
                )}
              </button>
              {formData.location.address && (
                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-md text-green-800 text-sm flex items-start">
                  <i className="fas fa-check-circle mt-1 mr-2"></i>
                  <span>Location captured: {formData.location.address}</span>
                </div>
              )}
              {locationError && <p className="text-red-500 text-sm mt-2 flex items-center"><i className="fas fa-exclamation-circle mr-1"></i> {locationError}</p>}
              {errors.location && <p className="text-red-500 text-sm mt-2 flex items-center"><i className="fas fa-exclamation-circle mr-1"></i> {errors.location}</p>}
            </div>
            {mapUrl && (
              <div className="w-full h-64 mt-4 rounded-lg overflow-hidden shadow-md border border-gray-200">
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
              className="w-full btn-coffee-primary mt-8"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1 bg-[#F5F5DC]/10 p-8 rounded-2xl border border-[#F5F5DC]/30 h-fit">
          <h2 className="text-2xl font-bold mb-6 text-[#3E2723] border-b border-gray-200 pb-2">Order Summary</h2>
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-b-0">
                <div className="flex items-center">
                  <div className="relative w-16 h-16 flex-shrink-0 mr-4">
                    <Image src={item.image} alt={item.name} fill className="object-cover rounded-md" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#3E2723]">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-semibold text-[#6F4E37]">NPR {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-300">
            <h2 className="text-2xl font-bold text-[#3E2723]">Total:</h2>
            <p className="text-3xl font-bold text-[#6F4E37]">NPR {getTotalPrice().toFixed(2)}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
