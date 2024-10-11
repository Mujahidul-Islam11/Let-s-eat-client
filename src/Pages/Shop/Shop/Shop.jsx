import React, { useEffect, useState } from "react";
import SectionBanner from "../../Shared/SectionBanner/SectionBanner";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import ItemCard from "./ItemCard";
import { categoryBtns } from "../../../data/CategoryBtn";


const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [menu, loading] = useMenu();

  

  // data filtering
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


  return (
    <div className="text-black">
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
        <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-20 md:mb-28">
          {categoryBtns}
        </div>

        {/* menu cards*/}
        <div className="flex justify-center">
          {loading ? (
            <div className="text-center flex justify-center mb-24">
              <svg id="svgStyle" viewBox="0 0 50 50">
                <circle class="ring" cx="25" cy="25" r="20"></circle>
                <circle class="ball" cx="25" cy="5" r="3.5"></circle>
              </svg>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-y-24 gap-x-12">
              {filteredMenu?.map((item) => (
                <ItemCard item={item} key={item._id}></ItemCard>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Shop;
