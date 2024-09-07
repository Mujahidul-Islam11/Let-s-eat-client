import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { NavLink } from "react-router-dom";

const OurMenu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:mx-0">
        {filteredMenu?.map((item) => (
          <div
            key={item?.name}
            className="flex flex-col items-center text-center"
          >
            <img
              className="w-40 h-40 mb-4 rounded-full object-cover"
              src={item?.img}
              alt={item?.name}
            />
            <h3 className="text-lg font-semibold">{item?.name}</h3>
            <p>{item?.desc}</p>
            <p className="font-bold text-lg">${item?.price}</p>
            <p className="text-yellow-500">{item?.rating} ★</p>
          </div>
        ))}
      </div>
      <NavLink to={"/menu"}>
      <button className="bg-yellow-400 font-extralight py-3 px-6 rounded-full hover:bg-yellow-500 transition-all size-fit shadow-md mx-auto flex justify-center mt-6">
        View More
      </button>
      </NavLink>
    </section>
  );
};

export default OurMenu;
