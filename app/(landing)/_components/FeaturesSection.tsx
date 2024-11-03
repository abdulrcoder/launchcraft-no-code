import React from "react";

const FeaturesSection = () => (
  <section id="features" className="p-8 md:p-16 bg-gray-100">
    <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">
      Features
    </h2>
    <div className="grid gap-8 md:grid-cols-3">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Drag-and-Drop Editor</h3>
        <p className="mt-2">Easily create your page layout without any code.</p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Mobile Responsive</h3>
        <p className="mt-2">
          Your pages look great on any device automatically.
        </p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">SEO Optimized</h3>
        <p className="mt-2">Ensure your page ranks well on search engines.</p>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
