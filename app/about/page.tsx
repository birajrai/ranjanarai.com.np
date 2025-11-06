import React from 'react';

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Coming Soon!</h1>
        <p className="text-xl text-gray-600 mb-8">
          We're working hard to bring you an amazing About Us page. Stay tuned!
        </p>
        <div className="relative w-64 h-64 mx-auto">
          <div className="absolute inset-0 border-4 border-dashed border-gray-300 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-hourglass-half text-6xl text-gray-500"></i>
          </div>
        </div>
      </div>
    </main>
  );
}