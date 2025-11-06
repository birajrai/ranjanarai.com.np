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
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
                <i className="fas fa-bars fa-lg"></i>
              </button>
            </div>
          </div>
        </nav>
        {children}
        <Footer />
        {isMenuOpen && (
          <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 md:hidden z-50">
            <div className="flex justify-around">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex flex-col items-center text-sm ${
                    pathname === item.href ? "text-primary" : "text-gray-500"
                  } hover:text-primary`}
                  onClick={() => setIsMenuOpen(false)} // Close menu on item click
                >
                  <i className={`fas ${getIconForNavItem(item.name)} text-lg mb-1`}></i>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
