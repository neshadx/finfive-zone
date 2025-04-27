import React from "react";

const Footer = () => {
  return (
    
      <footer className="p-6 bg-white text-center space-y-3">
        <h1 className="text-2xl font-semibold">
          <span className="text-[#1A7587]">FinFive</span>
          <span className="text-[#E46235] font-bold">Zone</span>
        </h1>

        <p className="text-sm font-medium text-gray-700">Bid. Win. Own.</p>

        <nav className="flex justify-center gap-6 text-sm text-gray-800 font-medium">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Auctions
          </a>
          <a href="#" className="hover:underline">
            Categories
          </a>
          <a href="#" className="hover:underline">
            How to works
          </a>
        </nav>

        <p className="text-xs text-gray-500">
          © 2025 FinFive. All rights reserved.
        </p>
      </footer>
    
  );
};

export default Footer;
