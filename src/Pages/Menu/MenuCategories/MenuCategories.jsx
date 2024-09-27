import React from "react";
import { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

const MenuCategories = ({ menu, loading, status, category, title }) => {
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    const filteredItems = menu?.filter(
      (item) => item.status === status || item.category === category
    );
    setFilteredMenu(filteredItems);
  }, [menu]);
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 border-b-2 border-black px-5 w-fit mx-auto">
        {title}
      </h2>
      {loading ? (
        <div className="text-center flex justify-center py-12">
          <svg id="svgStyle" viewBox="0 0 50 50">
            <circle class="ring" cx="25" cy="25" r="20"></circle>
            <circle class="ball" cx="25" cy="5" r="3.5"></circle>
          </svg>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:mx-0 mb-12">
          {filteredMenu?.map((item) => (
            <MenuCard key={item._id} item={item}></MenuCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuCategories;
