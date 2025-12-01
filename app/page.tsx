'use client';

import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import dynamic from 'next/dynamic';
import Link from "next/link";
import Image from "next/image";

const StatsSection = dynamic(() => import('@/components/StatsSection'), { ssr: false });
import ImageSlider from "@/components/ImageSlider";


export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#D4A574] to-[#C19A6B]">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-white py-4 text-center font-bold text-lg md:text-xl border-b-4 border-[#6F4E37] shadow-lg">
        🎉 Special Offer: Get 15% OFF on your first order! Use code: FIRST15 🎉
      </div>

      {/* Hero Section with Center Logo */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#6F4E37] rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#C19A6B] rounded-full blur-3xl"></div>
          </div>

          {/* Center Logo/Brand */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center mb-12">
            {/* Logo Container with Gaming Style Border */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-b from-[#8B5E3C] to-[#6F4E37] rounded-full blur-xl opacity-50 scale-110"></div>
              <div className="relative bg-gradient-to-b from-[#F5F5DC] to-[#E8E8C8] p-4 rounded-full border-8 border-[#6F4E37] shadow-2xl">
                <Image
                  src="/logo.png"
                  alt="Ranjana Achar Udhyog"
                  width={200}
                  height={200}
                  className="rounded-full"
                  priority
                />
              </div>
              {/* Decorative Corner Elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#C19A6B] rounded-lg rotate-45 border-4 border-[#6F4E37]"></div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#C19A6B] rounded-lg rotate-45 border-4 border-[#6F4E37]"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#C19A6B] rounded-lg rotate-45 border-4 border-[#6F4E37]"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[#C19A6B] rounded-lg rotate-45 border-4 border-[#6F4E37]"></div>
            </div>

            {/* Brand Name with Gaming Typography */}
            <h1 className="text-5xl md:text-7xl font-black text-[#6F4E37] mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] tracking-tight" style={{ textShadow: '4px 4px 0px #3E2723, 6px 6px 0px rgba(62,39,35,0.3)' }}>
              RANJANA ACHAR
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-[#3E2723] mb-8 drop-shadow-lg">
              Authentic Homemade Pickles
            </p>

            {/* Large CTA Button - Gaming Style */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link href="/products">
                <button className="group relative px-12 py-5 bg-gradient-to-b from-[#8B5E3C] to-[#6F4E37] text-[#FFF8E1] font-black text-xl md:text-2xl rounded-xl border-4 border-[#5D4037] shadow-[0_8px_0_#4E342E] hover:shadow-[0_4px_0_#4E342E] hover:translate-y-1 active:shadow-none active:translate-y-2 transition-all duration-150 uppercase tracking-wider">
                  <span className="relative z-10">🛒 Shop Now</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </button>
              </Link>

              <Link href="/about">
                <button className="px-10 py-4 bg-gradient-to-b from-[#F5F5DC] to-[#E8E8C8] text-[#3E2723] font-bold text-lg md:text-xl rounded-xl border-4 border-[#D7CCC8] shadow-[0_6px_0_#BCAAA4] hover:shadow-[0_3px_0_#BCAAA4] hover:translate-y-1 active:shadow-none active:translate-y-2 transition-all duration-150 uppercase tracking-wide">
                  Our Story
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Slider */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-[#F5F5DC] p-2 rounded-2xl border-4 border-[#6F4E37] shadow-2xl">
            <ImageSlider />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header with Gaming Style */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-b from-[#8B5E3C] to-[#6F4E37] px-8 py-4 rounded-xl border-4 border-[#5D4037] shadow-[0_6px_0_#4E342E] mb-6">
              <h2 className="text-4xl md:text-5xl font-black text-[#FFF8E1] uppercase tracking-wide" style={{ textShadow: '2px 2px 0px #3E2723' }}>
                ⭐ Featured Products ⭐
              </h2>
            </div>
            <p className="text-xl text-[#3E2723] font-bold">Handpicked favorites just for you!</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="transform hover:scale-105 transition-transform duration-200">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link href="/products">
              <button className="px-12 py-5 bg-gradient-to-b from-[#8B5E3C] to-[#6F4E37] text-[#FFF8E1] font-black text-xl rounded-xl border-4 border-[#5D4037] shadow-[0_8px_0_#4E342E] hover:shadow-[0_4px_0_#4E342E] hover:translate-y-1 active:shadow-none active:translate-y-2 transition-all duration-150 uppercase tracking-wider">
                View All Products →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-[#6F4E37] to-[#8B5E3C] border-y-4 border-[#3E2723]">
        <StatsSection />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-b from-[#F5F5DC] to-[#E8E8C8] px-8 py-4 rounded-xl border-4 border-[#D7CCC8] shadow-[0_6px_0_#BCAAA4] mb-6">
              <h2 className="text-4xl md:text-5xl font-black text-[#3E2723] uppercase tracking-wide">
                Why Choose Us?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🌿", title: "100% Natural", desc: "No artificial preservatives or colors" },
              { icon: "👩‍🍳", title: "Homemade", desc: "Traditional recipes passed down generations" },
              { icon: "⚡", title: "Fresh Daily", desc: "Made fresh with premium ingredients" }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-b from-[#F5F5DC] to-[#E8E8C8] p-6 rounded-xl border-4 border-[#D7CCC8] shadow-[0_6px_0_#BCAAA4] hover:shadow-[0_3px_0_#BCAAA4] hover:translate-y-1 transition-all duration-150">
                <div className="text-6xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-2xl font-black text-[#3E2723] mb-2 text-center uppercase">{item.title}</h3>
                <p className="text-[#3E2723]/80 text-center font-semibold">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
