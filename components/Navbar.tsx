'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartIcon from "./CartIcon";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

const mobileNavItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#FFFFFF] shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className={`text-2xl font-bold flex items-center transition-all duration-300 ${
            isScrolled ? "text-black" : "text-[#444444]"
          }`}
        >
          <Image
            src="/logo.png"
            alt="Ranjana Arai's Pickles Logo"
            width={isScrolled ? 48 : 64}
            height={isScrolled ? 48 : 64}
            className="h-auto w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xl font-semibold px-3 py-2 rounded-md transition-colors duration-300 ${
                pathname === item.href
                  ? "text-[#EF4141]"
                  : isScrolled
                  ? "text-[#444444] hover:bg-gray-100"
                  : "text-[#444444] hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Cart Icon - Placed outside of the mapping for consistent positioning */}
        <div className="hidden md:flex items-center">
          <CartIcon isScrolled={isScrolled} />
        </div>
        {/* Mobile menu button - visible only on mobile */}
        <div className="md:hidden flex items-center space-x-4">
          <CartIcon isScrolled={isScrolled} />
          <button
            onClick={toggleMenu}
            className={`${
              isScrolled ? "text-[#444444]" : "text-[#444444]"
            } focus:outline-none`}
          >
            <i className="fas fa-bars fa-lg"></i>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden mt-4 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        } bg-[#FFFFFF]`}
      >
        <div className="flex flex-col space-y-2">
          {mobileNavItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xl font-semibold px-3 py-2 rounded-md text-center ${
                pathname === item.href
                  ? "text-[#EF4141]"
                  : "text-[#444444] hover:bg-gray-100"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex justify-center py-2">
            <CartIcon isScrolled={true} />
          </div>
        </div>
      </div>
    </nav>
  );
}
