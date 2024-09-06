import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";

const Main = () => {
  const [openMenu, setOpenMenu] = useState(false);
//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('#Landing_page'),
//         smooth: true, 
//     });

//     return () => {
//         scroll.destroy();
//     };
// }, []);

  return (
    <div onClick={() => setOpenMenu(false)} className="relative">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu}></Navbar>
      <div id="">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
