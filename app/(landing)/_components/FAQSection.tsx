"use client";
import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is LaunchCraft?",
      answer:
        "LaunchCraft is a no-code landing page builder that helps you create stunning, responsive websites quickly and easily.",
    },
    {
      question: "Do I need any coding skills?",
      answer:
        "No coding skills are needed! LaunchCraft is designed for everyone, from beginners to professionals.",
    },
    {
      question: "Can I use my own domain?",
      answer:
        "Yes! You can connect your custom domain on our Pro and Enterprise plans.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial with full access to all features.",
    },
  ];

  return (
    <section id="faq" className="py-12 bg-white text-gray-700">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto px-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
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
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
