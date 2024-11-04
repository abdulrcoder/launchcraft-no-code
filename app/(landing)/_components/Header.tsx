import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Header = () => (
  <header className="flex justify-between items-center p-4 md:px-8 bg-black shadow-md">
    <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 shadow-lg">
      LaunchCraft
    </div>

    <nav className="hidden md:flex gap-4">
      <a href="#features" className="text-white hover:text-blue-400">
        Features
      </a>
      <a href="#pricing" className="text-white hover:text-blue-400">
        Pricing
      </a>
      <a href="#contact" className="text-white hover:text-blue-400">
        Contact
      </a>
    </nav>
    <HoverBorderGradient className="text-center px-6 py-2 text-sm">
      Sign in
    </HoverBorderGradient>
  </header>
);

export default Header;
