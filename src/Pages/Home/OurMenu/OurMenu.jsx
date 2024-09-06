import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const OurMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);
  return (
    <section className="my-12 py-10">
      <div className="container mx-auto">
        <SectionTitle
          title={"Our Menu"}
          desc={"Explore our delicious offerings."}
        ></SectionTitle>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:mx-0">
        {menu?.map((items) => (
          <div key={items?.name} className="flex flex-col items-center text-center">
            <img className="w-40 h-40 mb-4 rounded-full object-cover" src={items?.img} alt={items?.name} />
            <h3 className="text-lg font-semibold">{items?.name}</h3>
            <p>{items?.desc}</p>
            <p className="font-bold text-lg">${items?.price}</p>
            <p className="text-yellow-500">{items?.rating} ★</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMenu;
