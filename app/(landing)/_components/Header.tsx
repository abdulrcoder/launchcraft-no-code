import React from "react";

const Header = () => (
  <header className="flex justify-between items-center p-4 md:px-8 bg-white shadow-md">
    <div className="text-2xl font-bold">LaunchCraft</div>
    <nav className="hidden md:flex gap-4">
      <a href="#features" className="hover:text-blue-500">
        Features
      </a>
      <a href="#pricing" className="hover:text-blue-500">
        Pricing
      </a>
      <a href="#contact" className="hover:text-blue-500">
        Contact
      </a>
    </nav>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md md:ml-4">
      Get Started
    </button>
  </header>
);

export default Header;
