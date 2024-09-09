import React from "react";
import { NavLink } from "react-router-dom";

const ContactBanner = () => {
  return (
    <div
      className="w-full h-[300px]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-black bg-opacity-20 text-center flex flex-col justify-center items-center gap-4">
        <h3 className="text-3xl md:text-5xl font-semibold">Contact Us</h3>
        <div className="flex gap-3">
            <NavLink to={"/"}><h3 className="text-sm md:text-lg hover:text-yellow-300 duration-300">Home</h3></NavLink>
            <h3 className="text-4xl -mt-4 text-yellow-300">.</h3>
            <h3 className="text-sm md:text-lg border-b border-yellow-300">Contact</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
