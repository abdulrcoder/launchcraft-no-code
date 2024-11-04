"use client";
import { features } from "@/constants";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const FeaturesSection = () => (
  <section
    id="features"
    className="p-8 md:p-16 bg-gradient-to-b from-[#1E222E] to-black"
  >
    <h2 className="text-center text-2xl md:text-4xl font-bold text-white mb-8">
      Features
    </h2>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={features} />
    </div>
  </section>
);

export default FeaturesSection;
