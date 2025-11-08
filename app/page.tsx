import HeroBanner from "@/components/HeroBanner";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import dynamic from 'next/dynamic';
import Link from "next/link";
import Image from "next/image";

import StatsSection from "@/components/StatsSection";

const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroBanner
        imageUrl="/mockup/pouch_packaging.png"
        title="Ranjana Achar Udhyog: Taste the Tradition, Savor the Flavor"
        altText="Ranjana Arai's Pickles Banner Image"
      />

      <section className="py-12 bg-gray-50 w-full">
        <div className="container mx-auto px-4 text-center md:flex md:items-center md:space-x-8">
          <div className="md:w-1/2">
            <Image src="/mockup/jar.png" alt="Ranjana Achar Udhyog Jar" width={400} height={400} className="rounded-lg shadow-md mx-auto" />
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to Ranjana Achar Udhyog, where every jar is filled with tradition and passion. Founded by Ranjana Rai, we craft delicious pickles using natural ingredients and time-honored recipes. Experience authentic flavors from our home to your table. <Link href="/about" className="text-primary hover:underline">Learn more about our journey</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products">
              <button className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <StatsSection />
    </main>
  );
}
