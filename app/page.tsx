'use client';

import ImageSlider from "@/components/ImageSlider";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import dynamic from 'next/dynamic';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import StatsSection from "@/components/StatsSection";

const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.main
      className="flex min-h-screen flex-col items-center justify-between"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants} className="w-full">
        <ImageSlider />
      </motion.div>

      <motion.section variants={itemVariants} className="py-20 bg-[#F9FAFB] w-full">
        <div className="container mx-auto px-4 text-center md:flex md:items-center md:space-x-12">
          <div className="md:w-1/2">
            <Image src="/mockup/jar.png" alt="Ranjana Achar Udhyog Jar" width={400} height={400} className="rounded-lg shadow-lg mx-auto" />
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-5xl font-bold text-[#EF4141] mb-4">Our Story</h2>
            <p className="text-xl text-gray-500 mb-6">From our kitchen to your table.</p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to Ranjana Achar Udhyog, where every jar is filled with tradition and passion. Founded by Ranjana Rai, we craft delicious pickles using natural ingredients and time-honored recipes. Experience authentic flavors from our home to your table. <Link href="/about" className="text-[#EF4141] hover:underline">Learn more about our journey</Link>.
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="py-20 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-[#EF4141] text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/products">
              <button className="bg-[#EF4141] hover:bg-red-700 text-[#FFFFFF] font-bold py-4 px-10 rounded-full text-xl transition duration-300 ease-in-out transform hover:scale-105">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.div variants={itemVariants} className="w-full">
        <TestimonialsSection />
      </motion.div>

      <motion.div variants={itemVariants} className="w-full">
        <StatsSection />
      </motion.div>
    </motion.main>
  );
}
