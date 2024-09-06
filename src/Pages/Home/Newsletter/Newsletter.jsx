import React from "react";

const Newsletter = () => {
  return (
    <section className="relative my-12 py-20 bg-gray-100 bg-opacity-60 overflow-x-hidden overflow-y-hidden">
      <div className="flex gap-6 absolute -bottom-32 z-10">
        <img className="w-60 h-60 object-cover" src="https://imagizer.imageshack.com/img923/9705/b0phbX.png" alt="" />
        <img className="w-60 h-60 -mt-8" src="https://imagizer.imageshack.com/img923/7325/quVt5Z.png" alt="" />
        <img className="w-60 h-60 -mb-6 object-cover" src="https://imagizer.imageshack.com/img923/4135/I7IcdX.png" alt="" />
        <img className="w-60 h-60 object-cover" src="https://imagizer.imageshack.com/img922/5521/KlxLSE.png" alt="" />
        <img className="w-60 h-60 -mt-6 object-cover" src="https://imagizer.imageshack.com/img923/2848/Bo3ekU.png" alt="" />
      </div>
      <div className="container mx-auto text-center relative z-20">
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
