import React from 'react';
import Image from 'next/image';
import { aboutMetadata } from '../metadata';

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <main className="pt-24 flex min-h-screen flex-col items-center p-6 bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">About Ranjana Achar Udhyog</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Mission at Ranjana Achar Udhyog</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our mission at Ranjana Achar Udhyog is to bring the authentic taste of homemade pickles to your table. We are committed to using only the freshest, locally sourced ingredients to create pickles that are not only delicious but also healthy. We believe in preserving the traditional recipes of Nepal while also innovating with new flavors.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Founder: Ranjana Rai</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            <div className="md:w-1/3">
              <Image src="/brand.png" alt="Ranjana Rai" width={192} height={192} className="rounded-full shadow-lg w-48 h-48 object-cover mx-auto" />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-600 leading-relaxed mt-4 md:mt-0">
                Ranjana Rai, the heart and soul behind Ranjana Achar Udhyog, started this journey from her home kitchen. With a deep-rooted passion for cooking and a love for the traditional flavors of Nepal, she perfected her family&apos;s pickle recipes over the years. What started as a hobby, sharing her delicious creations with friends and family, soon blossomed into a business as demand for her pickles grew. Today, Ranjana personally oversees the entire pickle-making process, ensuring that every jar is filled with love, tradition, and the highest quality ingredients.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Ingredients</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We believe that the best pickles start with the best ingredients. That&apos;s why we partner with local farmers in Nepal to source the freshest vegetables and spices. Our pickles are free from artificial preservatives and additives, so you can enjoy the pure, natural taste of our ingredients. From the crispness of the vegetables to the tang of the spices, every bite is a testament to our commitment to quality.
          </p>
        </section>
      </div>
    </main>
  );
}