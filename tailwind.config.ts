import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6F4E37', // Coffee Bean
        secondary: '#F5F5DC', // Beige
        accent: '#C19A6B', // Caramel
        darkGray: '#3E2723', // Dark Brown
        cream: '#FFF8E1', // Cream background
      },
    },
  },
  plugins: [],
};

export default config;