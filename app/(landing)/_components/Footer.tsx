import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => (
  <footer className="p-6 md:p-10 bg-gradient-to-b from-[#1E222E] to-black text-white text-center">
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
      <p className="text-sm md:text-base">
        &copy; 2024 LaunchCraft. All rights reserved.
      </p>
      <div className="flex space-x-6">
        <a
          href="#"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Terms of Service
        </a>
      </div>
    </div>
    <div className="flex justify-center mt-6 space-x-4 text-lg">
      <a href="#" className="hover:text-blue-500 transition duration-200">
        <FaFacebookF />
      </a>
      <a href="#" className="hover:text-blue-400 transition duration-200">
        <FaTwitter />
      </a>
      <a href="#" className="hover:text-pink-400 transition duration-200">
        <FaInstagram />
      </a>
      <a href="#" className="hover:text-blue-600 transition duration-200">
        <FaLinkedinIn />
      </a>
    </div>
  </footer>
);

export default Footer;
