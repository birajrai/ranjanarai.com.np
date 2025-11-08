'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/mockup/pouch_packaging.png',
  '/mockup/jar.png',
  '/mockup/business_card.png',
  '/mockup/stickers.png',
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full relative"
        >
          <Image
            src={images[currentIndex]}
            alt={`Slider image ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <h1 className="text-5xl font-bold text-white mb-4">Ranjana Achar Udhyog</h1>
            <p className="text-xl text-white max-w-2xl">Experience the authentic taste of homemade Nepali pickles, crafted with love and traditional recipes.</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={handlePrevious}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={handleNext}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-[#EF4141]' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
