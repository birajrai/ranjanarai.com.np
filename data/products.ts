export interface Product {
  id: number;
  name: string;
  description: string;
  spiceLevel: string;
  image: string;
  slug: string;
  price: number;
  discount?: number;
  weight: string;
  stock: "available" | "sold-out" | "pre-order";
  category: string;
  gallery: string[];
}

export const products = [
  {
    id: 1,
    name: "Buff Pickle",
    slug: "buff-pickle",
    description: "A spicy and tangy pickle made from the finest buffalos.",
    spiceLevel: "Medium",
    price: 100,
    discount: 10, // 10% off
    weight: "500g",
    stock: "available",
    category: "Buff Pickles",
    image: "https://placehold.co/256x180?text=Buff+Pickle",
    gallery: [
      "https://placehold.co/600x400?text=Buff+Pickle+1",
      "https://placehold.co/600x400?text=Buff+Pickle+2",
      "https://placehold.co/600x400?text=Buff+Pickle+3",
    ],
  },
  {
    id: 2,
    name: "Chicken Pickle",
    slug: "chicken-pickle",
    description: "A spicy and tangy pickle made from the finest chicken.",
    spiceLevel: "Medium",
    price: 100,
    discount: 10, // 10% off
    weight: "500g",
    stock: "available",
    category: "Chicken Pickles",
    image: "https://placehold.co/256x180?text=Chicken+Pickle",
    gallery: [
      "https://placehold.co/600x400?text=Chicken+Pickle+1",
      "https://placehold.co/600x400?text=Chicken+Pickle+2",
      "https://placehold.co/600x400?text=Chicken+Pickle+3",
    ],
  },
];
