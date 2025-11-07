import HeroBanner from "@/components/HeroBanner";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import dynamic from 'next/dynamic';
import Link from "next/link";

const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"), { ssr: false });

export default function Home() {
  const totalProducts = products.length;
  const productCategories = [...new Set(products.map((p) => p.category))];
  const totalSales = "NPR 0"; // Dummy value

  const featuredProducts = products.filter((product) => product.featured);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroBanner
        imageUrl="/mockup/pouch_packaging.png"
        title="Ranjana Achar Udhyog: Taste the Tradition, Savor the Flavor"
        altText="Ranjana Arai's Pickles Banner Image"
      />

      <section className="py-12 bg-gray-50 w-full">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to Ranjana Achar Udhyog, where every jar tells a story of tradition and passion. Founded by Ranjana Rai, we craft delicious pickles using only the best natural ingredients and time-honored recipes. Each jar is packed with authentic flavors, bringing a delightful taste experience from our home to your table. <Link href="/about" className="text-primary hover:underline">Learn more about our journey</Link>.
          </p>
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

      <section className="py-12 w-full bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg shadow-md bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800">
                {totalProducts}
              </h3>
              <p className="text-gray-600">Products</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800">
                {productCategories.length}
              </h3>
              <p className="text-gray-600">Categories</p>
            </div>
            <div className="p-6 rounded-lg shadow-md bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800">{totalSales}</h3>
              <p className="text-gray-600">Total Sales</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
