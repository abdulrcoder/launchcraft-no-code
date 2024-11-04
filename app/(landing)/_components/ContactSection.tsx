import React from "react";

const ContactSection = () => (
  <section
    id="contact"
    className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#1E222E]"
  >
    <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white">
      Get in Touch
    </h2>
    <div className="max-w-2xl mx-auto px-6 py-8 bg-[#2C2F3F] rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
      <form className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2 md:col-span-1">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-200"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="mt-2 block w-full px-4 py-3 border border-gray-500 rounded-lg shadow-sm bg-[#1E222E] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
              required
            />
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-200"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="mt-2 block w-full px-4 py-3 border border-gray-500 rounded-lg shadow-sm bg-[#1E222E] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-200"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="How can we help you?"
            rows={5}
            className="mt-2 block w-full px-4 py-3 border border-gray-500 rounded-lg shadow-sm bg-[#1E222E] text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-150"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full md:w-auto px-10 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transform transition-transform duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default ContactSection;
