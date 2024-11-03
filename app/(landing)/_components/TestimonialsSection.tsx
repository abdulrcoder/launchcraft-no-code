import React from "react";

const Testimonials = () => (
  <section id="testimonials" className="py-12 bg-white text-gray-700">
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
      What Our Users Say
    </h2>
    <div className="grid gap-8 md:grid-cols-2 px-4 md:px-16">
      <div className="p-6 bg-gray-50 rounded-lg shadow-md">
        <p className="italic">
          "LaunchCraft made it so easy for me to set up my business site. I had
          a page ready in minutes!"
        </p>
        <h3 className="mt-4 font-semibold">- Alex P., Startup Founder</h3>
      </div>
      <div className="p-6 bg-gray-50 rounded-lg shadow-md">
        <p className="italic">
          "The templates are beautiful and really flexible. I could customize
          every detail without coding!"
        </p>
        <h3 className="mt-4 font-semibold">- Sarah K., Freelancer</h3>
      </div>
    </div>
  </section>
);

export default Testimonials;
