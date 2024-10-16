import React from 'react';
import { NavLink } from 'react-router-dom';

const SectionBanner = ({url, title, pageName}) => {
    return (
        <div
      className="w-full h-[200px] md:h-[300px]"
      style={{
        backgroundImage: `url('${url}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-black bg-opacity-15 text-center flex flex-col justify-center items-center gap-4">
        <h3 className="text-3xl md:text-5xl font-semibold">{title}</h3>
        <div className="flex gap-3">
            <NavLink to={"/"}><h3 className="text-sm md:text-lg hover:text-yellow-300 duration-300">Home</h3></NavLink>
            <h3 className="text-4xl -mt-4 text-yellow-300">.</h3>
            <h3 className="text-sm md:text-lg border-b-2 border-yellow-300">{pageName}</h3>
        </div>
      </div>
    </div>
    );
};

export default SectionBanner;