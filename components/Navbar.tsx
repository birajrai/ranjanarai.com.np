'use client';

import React, { useState } from "react";
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
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-black text-2xl font-bold flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Ranjana Arai's Pickles Logo"
            width={64}
            height={64}
            className="h-16 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-lg px-3 py-2 rounded-md ${
                pathname === item.href
                  ? "bg-primary text-white"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Cart Icon - Placed outside of the mapping for consistent positioning */}
        <div className="hidden md:flex items-center">
          <CartIcon />
        </div>
        {/* Mobile menu button - visible only on mobile */}
        <div className="md:hidden flex items-center space-x-4">
          <CartIcon />
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <i className="fas fa-bars fa-lg"></i>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 transition-all duration-300 ease-in-out overflow-hidden max-h-screen">
          <div className="flex flex-col space-y-2">
            {mobileNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg px-3 py-2 rounded-md text-center ${
                  pathname === item.href
                    ? "bg-primary text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex justify-center py-2">
              <CartIcon />
            </div>
          </div>
        </div>
      )}
      {!isMenuOpen && (
        <div className="md:hidden mt-4 transition-all duration-300 ease-in-out overflow-hidden max-h-0">
          <div className="flex flex-col space-y-2">
            {mobileNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg px-3 py-2 rounded-md text-center ${
                  pathname === item.href
                    ? "bg-primary text-white"
                    : "text-gray-800 hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex justify-center py-2">
              <CartIcon />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
