import { Metadata } from 'next';

export const homeMetadata: Metadata = {
  title: 'Ranjana Achar Udhyog - Authentic Homemade Pickles by Ranjana Rai',
  description: 'Discover the authentic taste of homemade pickles from Ranjana Achar Udhyog, founded by Ranjana Rai. Made with traditional recipes and the finest ingredients, our pickles are a perfect blend of flavor and tradition.',
  keywords: 'Ranjana Achar Udhyog, Ranjana Rai, homemade pickles, authentic pickles, traditional recipes, pickles online',
};

export const aboutMetadata: Metadata = {
  title: "About Ranjana Achar Udhyog - The Art of Pickle Making by Ranjana Rai",
  description: "Learn about the passion and tradition behind Ranjana Achar Udhyog's homemade pickles, founded by Ranjana Rai. Discover our story and the art of pickle making that has been passed down through generations.",
  keywords: 'Ranjana Achar Udhyog, Ranjana Rai, pickle making, homemade pickles, traditional recipes, about us',
};

export const productsMetadata: Metadata = {
  title: "Our Products - Ranjana Achar Udhyog's Homemade Pickles",
  description: 'Browse our wide range of authentic homemade pickles from Ranjana Achar Udhyog. From tangy to spicy, find the perfect pickle to compliment your meal. All our products are made with natural ingredients and traditional recipes.',
  keywords: 'Ranjana Achar Udhyog, homemade pickles, pickle products, buy pickles online, natural ingredients',
};
export const contactMetadata: Metadata = {
  title: "Contact Us - Ranjana Achar Udhyog's Homemade Pickles",
  description: 'Get in touch with Ranjana Achar Udhyog for any inquiries, feedback, or orders. We would love to hear from you!',
  keywords: 'Ranjana Achar Udhyog, contact us, pickle orders, customer service',
};

export const productMetadata = (productName: string): Metadata => ({
    title: `${productName} - Ranjana Achar Udhyog's Homemade Pickles`,
    description: `Enjoy the authentic taste of our ${productName} from Ranjana Achar Udhyog. Made with the finest ingredients and a traditional recipe, it\'s a perfect blend of flavor and tradition.`,
    keywords: `Ranjana Achar Udhyog, ${productName}, homemade pickles, authentic pickles, traditional recipes, buy pickles online`,
  });