import React from "react";

const Newsletter = () => {
  return (
    <section className="relative my-12 py-20 bg-gray-100 bg-opacity-60 overflow-x-hidden overflow-y-hidden">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Stay Updated with Our Latest News
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Subscribe to our newsletter to receive updates on new dishes, special
          offers, and more delicious news straight to your inbox.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-2/3 lg:w-1/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="bg-[#F0C333] hover:bg-[#E0B227] transition duration-300 text-black py-2 px-6 rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
