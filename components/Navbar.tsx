'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartIcon from "./CartIcon";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "PLAY", href: "/products" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="sticky top-0 w-full z-50 bg-gradient-to-b from-[#D4A574] to-[#C19A6B] border-b-4 border-[#6F4E37] shadow-xl">
        <div className="container mx-auto px-4 py-3">
          {/* Main Navigation Bar */}
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Ranjana Achar Udhyog Logo"
                width={60}
                height={60}
                className="hover:scale-110 transition-transform duration-200"
              />
            </Link>

            {/* Desktop Menu - Gaming Style Buttons */}
            <div className="hidden md:flex items-center gap-3 flex-1 justify-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-6 py-3 font-black text-sm lg:text-base uppercase tracking-wider rounded-lg border-3 transition-all duration-150 ${pathname === item.href
                      ? "bg-gradient-to-b from-[#8B5E3C] to-[#6F4E37] text-[#FFF8E1] border-[#5D4037] shadow-[0_4px_0_#4E342E] translate-y-0"
                      : "bg-gradient-to-b from-[#F5F5DC] to-[#E8E8C8] text-[#3E2723] border-[#D7CCC8] shadow-[0_4px_0_#BCAAA4] hover:shadow-[0_2px_0_#BCAAA4] hover:translate-y-0.5"
                    } border-4`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side - Cart & Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Cart Button - Gaming Style */}
              <div className="hidden md:block">
                <Link href="/cart" className="relative px-5 py-3 bg-gradient-to-b from-[#8B5E3C] to-[#6F4E37] text-[#FFF8E1] font-black text-sm rounded-lg border-4 border-[#5D4037] shadow-[0_4px_0_#4E342E] hover:shadow-[0_2px_0_#4E342E] hover:translate-y-0.5 transition-all duration-150 uppercase tracking-wide flex items-center gap-2">
                  <i className="fas fa-shopping-cart"></i>
                  <span>CART</span>
                </Link>
              </div>

              {/* Mobile: Cart Icon + Menu Button */}
              <div className="md:hidden flex items-center gap-2">
                <CartIcon />
                <button
                  onClick={toggleMenu}
                  className="px-4 py-3 bg-gradient-to-b from-[#F5F5DC] to-[#E8E8C8] text-[#3E2723] font-black rounded-lg border-4 border-[#D7CCC8] shadow-[0_4px_0_#BCAAA4] active:shadow-none active:translate-y-1 transition-all duration-150"
                  aria-label="Toggle menu"
                >
                  <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} fa-lg`}></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden bg-[#C19A6B] border-t-4 border-[#6F4E37] transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-6 py-4 font-black text-base uppercase tracking-wide rounded-lg border-4 transition-all duration-150 text-center ${pathname === item.href
                    ? "bg-gradient-to-b from-[#8B5E3C] to-[#6F4E37] text-[#FFF8E1] border-[#5D4037] shadow-[0_4px_0_#4E342E]"
                    : "bg-gradient-to-b from-[#F5F5DC] to-[#E8E8C8] text-[#3E2723] border-[#D7CCC8] shadow-[0_4px_0_#BCAAA4]"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}