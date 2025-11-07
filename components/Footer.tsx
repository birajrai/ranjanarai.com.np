import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white mt-8 py-8 px-4">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand.png"
            alt="Ranjana Achar Udhyog Logo"
            width={64}
            height={64}
            className="h-16 w-auto"
          />
        </Link>
        <p className="text-gray-400 text-center max-w-md">
          Ranjana Achar Udhyog: Experience the authentic taste of homemade pickles, crafted by Ranjana Rai with natural ingredients and a whole lot of love.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-[#1877F2] hover:text-[#1877F2]"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="#"
            className="text-[#C13584] hover:text-[#C13584]"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="#"
            className="text-[#000000] hover:text-[#000000]"
            aria-label="TikTok"
          >
            <i className="fab fa-tiktok fa-2x"></i>
          </a>
        </div>
        <p className="text-gray-500 text-sm pt-4 border-t border-gray-700 w-full text-center">
          &copy; {new Date().getFullYear()} Ranjana Achar Udhyog. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
