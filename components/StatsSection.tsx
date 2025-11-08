import { products } from "@/data/products";

export default function StatsSection() {
  const totalProducts = products.length;
  const productCategories = [...new Set(products.map((p) => p.category))];
  const totalSales = "NPR 0"; // Dummy value

  return (
    <section className="py-20 w-full bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-[#EF4141] mb-12">Our Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 rounded-lg shadow-lg bg-gray-50 flex flex-col items-center justify-center">
            <i className="fas fa-boxes fa-3x text-[#EF4141] mb-4"></i>
            <h3 className="text-4xl font-bold text-gray-800 mb-2">
              {totalProducts}
            </h3>
            <p className="text-gray-600 text-lg">Products</p>
          </div>
          <div className="p-8 rounded-lg shadow-lg bg-gray-50 flex flex-col items-center justify-center">
            <i className="fas fa-tags fa-3x text-[#EF4141] mb-4"></i>
            <h3 className="text-4xl font-bold text-gray-800 mb-2">
              {productCategories.length}
            </h3>
            <p className="text-gray-600 text-lg">Categories</p>
          </div>
          <div className="p-8 rounded-lg shadow-lg bg-gray-50 flex flex-col items-center justify-center">
            <i className="fas fa-hand-holding-dollar fa-3x text-[#EF4141] mb-4"></i>
            <h3 className="text-4xl font-bold text-gray-800 mb-2">{totalSales}</h3>
            <p className="text-gray-600 text-lg">Total Sales</p>
          </div>
        </div>
      </div>
    </section>
  );
}
