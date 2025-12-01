import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3E2723] text-[#F5F5DC] mt-12 py-10 px-4">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand.png"
            alt="Ranjana Achar Udhyog Logo"
            width={80}
            height={80}
            className="h-20 w-auto"
          />
        </Link>
        <p className="text-[#F5F5DC]/80 text-center max-w-md text-lg">
          Ranjana Achar Udhyog: Experience the authentic taste of homemade pickles, crafted by Ranjana Rai with natural ingredients and a whole lot of love.
        </p>
        <div className="flex space-x-6">
          <a
            href="#"
            className="text-[#F5F5DC] hover:text-[#6F4E37] transition-colors duration-300"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="#"
            className="text-[#F5F5DC] hover:text-[#6F4E37] transition-colors duration-300"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a
            href="#"
            className="text-[#F5F5DC] hover:text-[#6F4E37] transition-colors duration-300"
            aria-label="TikTok"
          >
            <i className="fab fa-tiktok fa-2x"></i>
          </a>
        </div>
        <p className="text-[#F5F5DC]/60 text-sm pt-6 border-t border-[#F5F5DC]/20 w-full text-center">
          &copy; {new Date().getFullYear()} Ranjana Achar Udhyog. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
