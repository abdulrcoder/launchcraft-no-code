import React from "react";

const PricingSection = () => (
  <section id="pricing" className="py-12 bg-gray-100 text-gray-700">
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Pricing</h2>
    <div className="grid gap-8 md:grid-cols-3 px-4 md:px-16">
      <div className="p-6 bg-white rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold">Basic</h3>
        <p className="mt-4 text-4xl font-bold">$9</p>
        <p className="text-sm text-gray-500">per month</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>Access to all templates</li>
          <li>Basic customization</li>
          <li>Email support</li>
        </ul>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md">
          Get Started
        </button>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold">Pro</h3>
        <p className="mt-4 text-4xl font-bold">$29</p>
        <p className="text-sm text-gray-500">per month</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>Advanced customization</li>
          <li>Priority support</li>
          <li>Custom domains</li>
        </ul>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md">
          Get Started
        </button>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md text-center">
        <h3 className="text-xl font-semibold">Enterprise</h3>
        <p className="mt-4 text-4xl font-bold">Contact Us</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>Full customization</li>
          <li>Dedicated support</li>
          <li>Custom integrations</li>
        </ul>
        <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md">
          Contact Us
        </button>
      </div>
    </div>
  </section>
);

export default PricingSection;
