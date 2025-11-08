import { Product } from "@/data/products";

export const calculateDiscountedPrice = (product: Product): number => {
  return product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;
};
