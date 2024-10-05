import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { NavLink } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";

const OurMenu = () => {
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [menu, loading] = useMenu();
  useEffect(() => {
    const popularMenu = menu?.filter((item) => item.status === "popular");
    setFilteredMenu(popularMenu);
  }, [menu]);

  return (
    <section className="my-12 py-10">
      <div className="container mx-auto">
        <SectionTitle
          title={"Our Menu"}
          desc={"Explore our delicious offerings."}
        ></SectionTitle>
      </div>
      {loading ? (
        <div className="text-center flex justify-center py-12">
        <svg id="svgStyle" viewBox="0 0 50 50">
        <circle class="ring" cx="25" cy="25" r="20"></circle>
        <circle class="ball" cx="25" cy="5" r="3.5"></circle>
      </svg>
      </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:mx-0 text-black">
          {filteredMenu?.map((item) => (
            <div
              key={item?.name}
              className="flex flex-col items-center text-center hover:scale-105 duration-300 cursor-pointer"
            >
              <img
                className="w-40 h-40 mb-4 rounded-full object-cover"
                src={item?.img}
                alt={item?.name}
              />
              <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold">{item?.name}</h3>
              <p className="text-sm">{item?.desc}</p>
              <p className="font-bold text-lg">${item?.price}</p>
              <p className="text-yellow-500">{item?.rating} ★</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <NavLink to={"/menu"}>
        <button className="bg-yellow-400 text-black font-extralight py-3 px-6 rounded-full hover:bg-yellow-500 transition-all size-fit shadow-md mx-auto flex justify-center mt-6">
          View More
        </button>
      </NavLink>
    </section>
  );
};

export default OurMenu;
