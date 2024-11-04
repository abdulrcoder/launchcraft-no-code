"use client";
import { faqs } from "@/constants";
import { FAQ } from "@/types";
import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-12 bg-gradient-to-b from-black to-[#1E222E] text-gray-200"
    >
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto px-4">
        {faqs.map((faq: FAQ, index: number) => (
          <div key={index} className="border-b border-gray-600 py-4">
            <button
              className="w-full text-left font-semibold text-lg"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              <span className="float-right">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-400">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
