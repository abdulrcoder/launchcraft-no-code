import React from "react";

const Footer = () => (
  <footer className="p-4 md:p-8 bg-gray-800 text-white text-center">
    <p>&copy; 2024 LaunchCraft. All rights reserved.</p>
    <div className="flex justify-center mt-4 space-x-4">
      <a href="#" className="hover:text-blue-400">
        Privacy Policy
      </a>
      <a href="#" className="hover:text-blue-400">
        Terms of Service
      </a>
    </div>
  </footer>
);

export default Footer;
