'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
        {/* Desktop navigation links - visible on md and up, or when isMenuOpen is true on mobile */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className={`text-lg px-3 py-2 rounded-md`}>
              {item.name}
            </Link>
          ))}
        </div>
        {/* Mobile menu button - visible only on mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <i className="fas fa-bars fa-lg"></i>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-2">
            {mobileNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg px-3 py-2 rounded-md text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
