"use client";
import React from "react";

import { Button } from "./ui/moving-border";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const HeroSection = () => (
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
    {/* Bottom Image */}
    <Button className="w-full max-w-4xl mx-auto h-full  rounded-lg overflow-hidden">
      <img
        src="/images/dashboard.svg"
        alt="Bottom Graphic"
        className="w-full h-full object-cover"
      />
    </Button>
  </section>
);

export default HeroSection;
