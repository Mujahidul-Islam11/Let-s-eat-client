import React from "react";
import { useEffect, useState } from "react";

const MenuCategories = ({ menu, loading, status, category, title }) => {
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    const filteredItems = menu?.filter(
      (item) => item.status === status || item.category === category
    );
    setFilteredMenu(filteredItems);
  }, [menu]);
  return (
    <div className="px-8 lg:px-16">
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:mx-0">
          {filteredMenu?.map((item) => (
            <div
              key={item?.name}
              className="flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer"
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
    </div>
  );
};

export default MenuCategories;
