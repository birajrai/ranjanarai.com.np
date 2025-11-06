"use client";
import "@/app/globals.css";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

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

  const getIconForNavItem = (name: string) => {
    switch (name) {
      case "Home":
        return "fa-home";
      case "About Us":
        return "fa-info-circle";
      case "Products":
        return "fa-boxes";
      case "Contact":
        return "fa-envelope";
      default:
        return "fa-question-circle";
    }
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="bg-gray-50">
        <nav className="bg-white p-6 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link
              href="/"
              className="text-black text-2xl font-bold flex items-center"
            >
              <img
                src="/logo.png"
                alt="Ranjana Arai's Pickles Logo"
                className="h-16 w-auto"
              />
            </Link>
            {/* Desktop navigation links - visible on md and up, or when isMenuOpen is true on mobile */} 
            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                                    className={`text-lg px-3 py-2 rounded-md ${
                                      pathname === item.href ? "text-primary" : "text-gray-500"
                                    } hover:text-primary`}                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Mobile menu button - visible only on mobile */} 
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
                <i className="fas fa-bars fa-lg"></i>
              </button>
            </div>
          </div>
        </nav>
        {children}
        <Footer />
        {/* Offcanvas Menu */}
        <div
          className={`fixed top-0 right-0 w-64 bg-white h-full shadow-lg transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-800 focus:outline-none">
              <i className="fas fa-times fa-lg"></i>
            </button>
          </div>
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg px-3 py-2 rounded-md ${
                  pathname === item.href ? 'bg-primary text-white' : 'text-gray-800 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 md:hidden z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

      </body>
    </html>
  );
}
