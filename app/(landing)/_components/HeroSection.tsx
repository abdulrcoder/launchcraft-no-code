"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/moving-border";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const HeroSection = () => {
  // State to manage whether we're in the browser
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set the state to true when the component is mounted on the client
    setIsClient(true);
  }, []);

  return (
    <section className="flex flex-col items-center text-center p-8 bg-gradient-to-b from-black to-[#1E222E] text-white relative">
      <div className="absolute inset-0"></div>
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold">
          Build Landing Pages Without Code
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Create stunning landing pages quickly and easily with LaunchCraft!
        </p>
        <div className="w-full flex items-center justify-center my-5">
          <HoverBorderGradient className="text-center">
            Start Building
          </HoverBorderGradient>
        </div>
      </div>

      {/* Conditionally render the Button and Image only when in the client */}
      {isClient && (
        <Button className="w-full max-w-4xl mx-auto h-full  overflow-hidden">
          <div>
            <img
              src="/images/dashboard.svg"
              alt="Bottom Graphic"
              className="w-full h-full object-cover"
            />
          </div>
        </Button>
      )}
    </section>
  );
};

export default HeroSection;
