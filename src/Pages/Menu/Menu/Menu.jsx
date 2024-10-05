import React from "react";
import MenuContainer from "../MenuContainer/MenuContainer";
import SectionBanner from "../../Shared/SectionBanner/SectionBanner";

const Menu = () => {
  return (
    <div className="text-black">
      <SectionBanner
        title={"Our Menu"}
        pageName={"Menu"}
        url={
          "https://plus.unsplash.com/premium_photo-1683657860029-05a5415fa618?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      ></SectionBanner>
      <MenuContainer></MenuContainer>
    </div>
  );
};

export default Menu;
