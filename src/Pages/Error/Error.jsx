import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <img
        className="md:w-1/2 md:h-1/2 object-cover"
        src="https://imagizer.imageshack.com/img923/6628/uY8bZ4.png"
        alt=""
      />
      <div className="text-center space-y-5">
      <h3 className="text-3xl md:text-4xl font-extrabold">
        Oops! Something went wrong 😥
      </h3>
      <p className="text-sm">
        The page you are looking for was moved, removed, renamed or never
        existed.
      </p>
      <NavLink to={"/"}>
      <button className="bg-yellow-400 font-extralight mt-5 py-3 px-6 rounded-full hover:bg-yellow-500 transition-all duration-200 size-fit shadow-md flex justify-center mx-auto">
        Back to homepage
      </button>
      </NavLink>
      </div>
    </div>
  );
};

export default Error;
