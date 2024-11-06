"use client";
import React from "react";

import { Template } from "@/types";
import { templates } from "@/constants";
import { BackgroundGradient } from "./ui/background-gradient.tsxbackground-gradient";

const TemplateShowcase = () => (
  <section
    id="templates"
    className="py-12 bg-gradient-to-b from-[#1E222E] to-black text-gray-700"
  >
    <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-8">
      Template Showcase
    </h2>
    <div className="grid gap-6 md:grid-cols-3 px-4 md:px-16">
      {templates.map((template: Template, index: number) => (
        <BackgroundGradient
          key={index}
          className="rounded-[22px] max-w-sm  bg-[#18181B] dark:bg-zinc-900 overflow-hidden"
        >
          <img
            src={template.imageUrl}
            alt={template.altText}
            className="w-full h-48 object-cover rounded-t-xl "
          />
          <div className="p-4 text-white">
            <h3 className="text-lg font-semibold">{template.title}</h3>
            <p className="mt-2 text-sm">{template.description}</p>
          </div>
        </BackgroundGradient>
      ))}
    </div>
  </section>
);

export default TemplateShowcase;
