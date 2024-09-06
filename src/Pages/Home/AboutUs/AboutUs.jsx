import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full h-[600px] my-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-14">
      <img
        className="w-3/4 md:w-[40%] h-1/2 md:h-[88%] object-cover"
        src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <div className="relative md:w-[40%] md:h-[88%]  bg-white mx-6 md:p-8 rounded-md flex flex-col justify-center">
        <div className="absolute h-40 md:h-52 w-40 bg-gray-300 top-4 md:top-8 z-5 opacity-30 -left-3 md:-left-1"></div>
        <div className="z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 text-sm md:text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Proin eget tortor
            risus. Nulla quis lorem ut libero malesuada feugiat.
          </p>
        </div>
        <button className="bg-yellow-400 font-extralight py-3 px-6 rounded-md hover:bg-yellow-500 transition-all size-fit shadow-md">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
