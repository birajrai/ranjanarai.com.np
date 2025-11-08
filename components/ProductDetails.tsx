'use client';

import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import toast from 'react-hot-toast';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = () => {
    console.log(`Product added to wishlist: ${product.name}`);
  };

  return (
    <div className="md:w-1/2">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 text-lg mb-4">{product.description}</p>
      <p className="text-gray-800 text-xl font-semibold mb-2">Spice Level: {product.spiceLevel}</p>
      <p className="text-gray-800 text-xl font-semibold mb-2">Ingredients: {product.ingredients.join(', ')}</p>
      <div className="flex items-baseline mb-4">
        {product.discount ? (
          <p className="text-2xl font-bold text-gray-800 mr-2">
            NPR {(product.price - (product.price * product.discount) / 100).toFixed(2)}
          </p>
        ) : null}
        <p
          className={`text-xl text-gray-600 ${product.discount ? "line-through" : "font-bold"}`}
        >
          NPR {product.price.toFixed(2)}
        </p>
      </div>
      <p className="text-gray-700 text-lg mb-4">Stock: {product.stock}</p>
      <p className="text-gray-700 text-lg mb-4">Weight: {product.weight}</p>
      <div className="flex items-center">
        <button onClick={handleAddToCart} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
          Add to Cart
        </button>
        <button onClick={handleAddToWishlist} className="ml-4 text-gray-500 hover:text-red-500">
          <i className="fas fa-heart fa-lg"></i>
        </button>
      </div>
    </div>
  );
}
