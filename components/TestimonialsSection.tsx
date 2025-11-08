'use client';

import React from 'react';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="py-20 w-full bg-[#F9FAFB]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-[#EF4141] mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-lg shadow-lg bg-white"
            >
              <p className="text-lg text-gray-700 mb-6">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="font-bold text-gray-800">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
