import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { Toaster } from "sonner";

const Main = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openFavorite, setOpenFavorite] = useState(false);

  return (
    <div onClick={() => setOpenMenu(false)} className=" relative lg:max-w-7xl lg:mx-auto">
      <Toaster/>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} openFavorite={openFavorite} setOpenFavorite={setOpenFavorite}></Navbar>
      <div className="py-3">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
