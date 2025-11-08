import "@/app/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"; // Import the new Navbar component
import { Roboto } from "next/font/google";
import { homeMetadata } from "@/app/metadata";

export const metadata = homeMetadata; // Export homeMetadata from here

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      <body className="bg-gray-50 pt-24">
        <CartProvider>
          <Navbar /> {/* Use the Navbar component */}
          {children}
          <Footer />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}