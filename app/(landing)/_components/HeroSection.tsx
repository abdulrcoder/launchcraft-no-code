import React from "react";

const HeroSection = () => (
  <section className="flex flex-col items-center text-center p-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white relative">
    <div className="absolute inset-0"></div>
    <div className="relative z-10">
      <h1 className="text-3xl md:text-5xl font-bold">
        Build Landing Pages Without Code
      </h1>
      <p className="mt-4 text-lg md:text-xl">
        Create stunning landing pages quickly and easily with LaunchCraft!
      </p>
      <button className="mt-6 bg-white text-blue-700 font-semibold px-6 py-2 rounded-md shadow-md hover:bg-gray-200">
        Start Building
      </button>
    </div>
    {/* Bottom Image */}
    <div className="relative z-10 mt-8">
      <img
        src="/images/dashboard.svg" // Replace with your bottom image path
        alt="Bottom Graphic"
        className="w-full max-w-4xl mx-auto rounded-lg" // Adjust size as needed
      />
    </div>
  </section>
);

export default HeroSection;
