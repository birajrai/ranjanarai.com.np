import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkGray text-black text-center p-4 mt-8">
      <div className="flex items-center justify-center mb-2">
        <img
          src="/logo.png"
          alt="Ranjana Kumari Rai Logo"
          className="h-6 w-6 mr-2"
        />
        <p className="text-lg font-bold">Ranjana Kumari Rai</p>
      </div>
      <p>
        © {new Date().getFullYear()} Ranjana Kumari Rai. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
