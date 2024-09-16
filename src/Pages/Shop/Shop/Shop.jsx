import React, { useEffect, useState } from "react";
import SectionBanner from "../../Shared/SectionBanner/SectionBanner";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [menu, loading] = useMenu();

  const categoryBtns = (
    <>
      <button
        onClick={() => setSelectedCategory("All")}
        className={` border font-extralight py-3 px-6 hover:bg-yellow-400 rounded-full ${
          selectedCategory === "All" ? "bg-yellow-400" : "bg-white"
        } transition-all size-fit shadow-md flex justify-center mt-6`}
      >
        All
      </button>
      <button
        onClick={() => setSelectedCategory("Chef's Specials")}
        className={` border font-extralight py-3 px-6 hover:bg-yellow-400 rounded-full ${
          selectedCategory === "Chef's Specials" ? "bg-yellow-400" : "bg-white"
        } transition-all size-fit shadow-md flex justify-center mt-6`}
      >
        Chef's Specials
      </button>
      <button
        onClick={() => setSelectedCategory("Salads")}
        className={` border font-extralight py-3 px-6 hover:bg-yellow-400 rounded-full ${
          selectedCategory === "Salads" ? "bg-yellow-400" : "bg-white"
        } transition-all size-fit shadow-md flex justify-center mt-6`}
      >
        Salads
      </button>
      <button
        onClick={() => setSelectedCategory("Beverages")}
        className={` border font-extralight py-3 px-6 hover:bg-yellow-400 rounded-full ${
          selectedCategory === "Beverages" ? "bg-yellow-400" : "bg-white"
        } transition-all size-fit shadow-md flex justify-center mt-6`}
      >
        Beverages
      </button>
    </>
  );

  // data filtering starts
  useEffect(() => {
    if (selectedCategory == "All") {
      setFilteredMenu(menu);
    } else {
      const filteredData = menu?.filter(
        (mnEl) => mnEl?.category === selectedCategory
      );
      setFilteredMenu(filteredData);
    }
  }, [menu, selectedCategory]);
  // data filtering ends

  console.log(filteredMenu);
  return (
    <div>
      <SectionBanner
        title={"Our Shop"}
        pageName={"Shop"}
        url={
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      ></SectionBanner>
      <div className="p-6 md:p-10 my-12">
        <SectionTitle
          title={" Explore Our Menu 🍴"}
          desc={
            "Delicious meals, fresh ingredients. Browse, pick, and enjoy your favorites!"
          }
        ></SectionTitle>
        <div className="flex justify-center gap-4">{categoryBtns}</div>
        {/* menu cards */}
        {loading ? (
          <div className="text-center flex justify-center py-12">
            <svg id="svgStyle" viewBox="0 0 50 50">
              <circle class="ring" cx="25" cy="25" r="20"></circle>
              <circle class="ball" cx="25" cy="5" r="3.5"></circle>
            </svg>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:mx-0 mt-12">
            {filteredMenu?.map((items) => (
              <div>
                <h3>{items?.category}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
