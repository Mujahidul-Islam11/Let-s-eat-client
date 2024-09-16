import React, { useState } from "react";
import SectionBanner from "../../Shared/SectionBanner/SectionBanner";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categoryBtns = (
    <>
      <button onClick={()=> setSelectedCategory("All")} className={` border font-extralight py-3 px-6 hover:bg-yellow-400 rounded-full ${selectedCategory === "All"? 'bg-yellow-400': 'bg-white'} transition-all size-fit shadow-md flex justify-center mt-6`}>
        All
      </button>
      <button onClick={()=> setSelectedCategory("Chef's Specials")} className={` border font-extralight py-3 px-6 hover:bg-yellow-400 rounded-full ${selectedCategory === "Chef's Specials"? 'bg-yellow-400': 'bg-white'} transition-all size-fit shadow-md flex justify-center mt-6`}>
        Chef's Specials
      </button>
      <button onClick={()=> setSelectedCategory("Salads")} className={` border font-extralight py-3 px-6 hover:bg-yellow-400 rounded-full ${selectedCategory === "Salads"? 'bg-yellow-400': 'bg-white'} transition-all size-fit shadow-md flex justify-center mt-6`}>
        Salads
      </button>
      <button onClick={()=> setSelectedCategory("Beverages")} className={` border font-extralight py-3 px-6 hover:bg-yellow-400 rounded-full ${selectedCategory === "Beverages"? 'bg-yellow-400': 'bg-white'} transition-all size-fit shadow-md flex justify-center mt-6`}>
        Beverages
      </button>
    </>
  );
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
        <div className="flex justify-center gap-4">
            {categoryBtns}
        </div>
      </div>
    </div>
  );
};

export default Shop;
