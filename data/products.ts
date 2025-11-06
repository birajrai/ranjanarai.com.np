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
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    featured: true,
    name: "Buff Pickle",
    slug: "buff-pickle",
    description: "A spicy and tangy pickle made from the finest sukuti.",
    spiceLevel: "Medium",
    price: 100,
    discount: 10,
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
    featured: true,
    name: "Chicken Pickle",
    slug: "chicken-pickle",
    description: "A spicy and tangy pickle made from the finest chicken.",
    spiceLevel: "Medium",
    price: 100,
    discount: 10,
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
  {
    id: 3,
    featured: false,
    name: "Aam ko Achar",
    slug: "aam-ko-achar",
    description:
      "Tangy and spicy green mango pickle made with mustard oil, chili, and fenugreek.",
    spiceLevel: "Medium",
    price: 120,
    weight: "500g",
    stock: "available",
    category: "Fruit Pickles",
    image: "https://placehold.co/256x180?text=Aam+ko+Achar",
    gallery: [
      "https://placehold.co/600x400?text=Aam+ko+Achar+1",
      "https://placehold.co/600x400?text=Aam+ko+Achar+2",
      "https://placehold.co/600x400?text=Aam+ko+Achar+3",
    ],
  },
  {
    id: 4,
    featured: false,
    name: "Lasun ko Achar",
    slug: "lasun-ko-achar",
    description:
      "Pungent garlic pickle with mustard oil, chili, and spices for a bold flavor.",
    spiceLevel: "Hot",
    price: 110,
    weight: "500g",
    stock: "available",
    category: "Vegetable Pickles",
    image: "https://placehold.co/256x180?text=Lasun+ko+Achar",
    gallery: [
      "https://placehold.co/600x400?text=Lasun+ko+Achar+1",
      "https://placehold.co/600x400?text=Lasun+ko+Achar+2",
      "https://placehold.co/600x400?text=Lasun+ko+Achar+3",
    ],
  },
  {
    id: 5,
    featured: false,
    name: "Tareko Khursani Achar",
    slug: "tareko-khursani-achar",
    description:
      "Fried green chili pickle mixed with salt, sugar, and vinegar for fiery tang.",
    spiceLevel: "Hot",
    price: 130,
    weight: "500g",
    stock: "available",
    category: "Vegetable Pickles",
    image: "https://placehold.co/256x180?text=Tareko+Khursani+Achar",
    gallery: [
      "https://placehold.co/600x400?text=Tareko+Khursani+Achar+1",
      "https://placehold.co/600x400?text=Tareko+Khursani+Achar+2",
      "https://placehold.co/600x400?text=Tareko+Khursani+Achar+3",
    ],
  },
  {
    id: 6,
    featured: false,
    name: "Akabare Khursani Achar",
    slug: "akabare-khursani-achar",
    description:
      "Vinegar-based red chili pickle made with tiny Akabare chilies, garlic, and ginger.",
    spiceLevel: "Hot",
    price: 140,
    weight: "500g",
    stock: "available",
    category: "Vegetable Pickles",
    image: "https://placehold.co/256x180?text=Akabare+Khursani+Achar",
    gallery: [
      "https://placehold.co/600x400?text=Akabare+Khursani+Achar+1",
      "https://placehold.co/600x400?text=Akabare+Khursani+Achar+2",
      "https://placehold.co/600x400?text=Akabare+Khursani+Achar+3",
    ],
  },
  {
    id: 7,
    featured: false,
    name: "Golbheda ko Achar",
    slug: "golbheda-ko-achar",
    description:
      "Tomato pickle with smoky flavor, mustard oil, turmeric, and timur for tangy taste.",
    spiceLevel: "Medium",
    price: 100,
    weight: "500g",
    stock: "available",
    category: "Fruit Pickles",
    image: "https://placehold.co/256x180?text=Golbheda+ko+Achar",
    gallery: [
      "https://placehold.co/600x400?text=Golbheda+ko+Achar+1",
      "https://placehold.co/600x400?text=Golbheda+ko+Achar+2",
      "https://placehold.co/600x400?text=Golbheda+ko+Achar+3",
    ],
  },
  {
    id: 8,
    featured: false,
    name: "Mula ko Achar",
    slug: "mula-ko-achar",
    description:
      "Fermented radish pickle with turmeric, chili, and mustard oil for sharp tang.",
    spiceLevel: "Medium",
    price: 90,
    weight: "500g",
    stock: "available",
    category: "Vegetable Pickles",
    image: "https://placehold.co/256x180?text=Mula+ko+Achar",
    gallery: [
      "https://placehold.co/600x400?text=Mula+ko+Achar+1",
      "https://placehold.co/600x400?text=Mula+ko+Achar+2",
      "https://placehold.co/600x400?text=Mula+ko+Achar+3",
    ],
  },
  {
    id: 9,
    featured: false,
    name: "Lapsi ko Achar",
    slug: "lapsi-ko-achar",
    description:
      "Sweet and sour hog-plum pickle with chili, sugar, and mustard oil.",
    spiceLevel: "Medium",
    price: 120,
    weight: "500g",
    stock: "available",
    category: "Fruit Pickles",
    image: "https://placehold.co/256x180?text=Lapsi+ko+Achar",
    gallery: [
      "https://placehold.co/600x400?text=Lapsi+ko+Achar+1",
      "https://placehold.co/600x400?text=Lapsi+ko+Achar+2",
      "https://placehold.co/600x400?text=Lapsi+ko+Achar+3",
    ],
  },
  {
    id: 10,
    featured: false,
    name: "Tama ko Achar",
    slug: "tama-ko-achar",
    description:
      "Fermented bamboo shoot pickle with mustard oil and spices, tangy and savory.",
    spiceLevel: "Medium",
    price: 130,
    weight: "500g",
    stock: "available",
    category: "Vegetable Pickles",
    image: "https://placehold.co/256x180?text=Tama+ko+Achar",
    gallery: [
      "https://placehold.co/600x400?text=Tama+ko+Achar+1",
      "https://placehold.co/600x400?text=Tama+ko+Achar+2",
      "https://placehold.co/600x400?text=Tama+ko+Achar+3",
    ],
  },
  {
    id: 11,
    featured: false,
    name: "Gundruk ko Achar",
    slug: "gundruk-ko-achar",
    description:
      "Tangy fermented leafy greens pickle with spices and mustard oil.",
    spiceLevel: "Medium",
    price: 100,
    weight: "500g",
    stock: "available",
    category: "Vegetable Pickles",
    image: "https://placehold.co/256x180?text=Gundruk+ko+Achar",
    gallery: [
      "https://placehold.co/600x400?text=Gundruk+ko+Achar+1",
      "https://placehold.co/600x400?text=Gundruk+ko+Achar+2",
      "https://placehold.co/600x400?text=Gundruk+ko+Achar+3",
    ],
  },
  {
    id: 12,
    featured: false,
    name: "Aloo ko Achar",
    slug: "aloo-ko-achar",
    description:
      "Boiled potato pickle with mustard oil, fenugreek, chili, sesame, and lemon for nutty-tangy flavor.",
    spiceLevel: "Mild",
    price: 90,
    weight: "500g",
    stock: "available",
    category: "Vegetable Pickles",
    image: "https://placehold.co/256x180?text=Aloo+ko+Achar",
    gallery: [
      "https://placehold.co/600x400?text=Aloo+ko+Achar+1",
      "https://placehold.co/600x400?text=Aloo+ko+Achar+2",
      "https://placehold.co/600x400?text=Aloo+ko+Achar+3",
    ],
  },
];
