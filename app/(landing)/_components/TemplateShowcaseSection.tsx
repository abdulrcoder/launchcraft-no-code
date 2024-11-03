import React from "react";

const TemplateShowcase = () => (
  <section id="templates" className="py-12 bg-gray-50 text-gray-700">
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
      Template Showcase
    </h2>
    <div className="grid gap-6 md:grid-cols-3 px-4 md:px-16">
      <div className="rounded-lg shadow-md overflow-hidden">
        <img
          src="/images/template1.jpg"
          alt="Template 1"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Modern Business</h3>
          <p className="mt-2 text-sm">Perfect for startups and businesses.</p>
        </div>
      </div>
      <div className="rounded-lg shadow-md overflow-hidden">
        <img
          src="/images/template2.jpg"
          alt="Template 2"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">Creative Portfolio</h3>
          <p className="mt-2 text-sm">
            Showcase your creative work beautifully.
          </p>
        </div>
      </div>
      <div className="rounded-lg shadow-md overflow-hidden">
        <img
          src="/images/template3.jpg"
          alt="Template 3"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">E-Commerce</h3>
          <p className="mt-2 text-sm">Ideal for online stores and shops.</p>
        </div>
      </div>
    </div>
  </section>
);

export default TemplateShowcase;
