import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { Toaster } from "sonner";

const Main = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openFavorite, setOpenFavorite] = useState(false);

  return (
    <section className="relative">
      <div onClick={() => setOpenMenu(false)} className="w-full lg:max-w-7xl lg:mx-auto">
        <Toaster />
        <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} openFavorite={openFavorite} setOpenFavorite={setOpenFavorite}></Navbar>
        <div className="py-3">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>

        {/* Favorite items drawer */}
        {openFavorite && <div onClick={() => { setOpenFavorite(false) }} className="w-full bg-black bg-opacity-50 absolute right-0 -top-4 flex justify-end h-screen z-50">
          <div onClick={(e) => { e.stopPropagation() }} className="p-8 bg-[#fff] w-[90%] md:w-[30%] border overflow-y-auto no-scrollbar">
            <div className="mb-3 w-full flex justify-end text-3xl"> <span onClick={() => { setOpenFavorite(false) }} className="cursor-pointer"><ion-icon name="close-outline"></ion-icon></span></div>
            <h3 className="text-lg uppercase">Your Favorites</h3>
            <div className="w-full border-b mt-4"></div>

            {/* Favorites card container */}
            <div className="h-[290px] overflow-y-auto no-scrollbar">
              {/* Item card */}
              <div className="border-b flex justify-between items-center py-2">
                <div className="flex gap-3 items-center">
                  <img className="size-[80px]" src="https://htmldemo.net/mixy/mixy/assets/images/products/cart/cart-1.jpg" alt="" />
                  <div className="space-y-2">
                    <h3 className="font-semibold">pasta salad</h3>
                    <p className="text-sm text-gray-700">$54.00</p>
                  </div>
                </div>
                <span className="text-[22px] font-extrabold cursor-pointer text-red-500"><ion-icon name="close-outline"></ion-icon></span>
              </div>
              {/* Item card */}
              <div className="border-b flex justify-between items-center py-2">
                <div className="flex gap-3 items-center">
                  <img className="size-[80px]" src="https://htmldemo.net/mixy/mixy/assets/images/products/cart/cart-1.jpg" alt="" />
                  <div className="space-y-2">
                    <h3 className="font-semibold">pasta salad</h3>
                    <p className="text-sm text-gray-700">$54.00</p>
                  </div>
                </div>
                <span className="text-[22px] font-extrabold cursor-pointer text-red-500"><ion-icon name="close-outline"></ion-icon></span>
              </div>
              {/* Item card */}
              <div className="border-b flex justify-between items-center py-2">
                <div className="flex gap-3 items-center">
                  <img className="size-[80px]" src="https://htmldemo.net/mixy/mixy/assets/images/products/cart/cart-1.jpg" alt="" />
                  <div className="space-y-2">
                    <h3 className="font-semibold">pasta salad</h3>
                    <p className="text-sm text-gray-700">$54.00</p>
                  </div>
                </div>
                <span className="text-[22px] font-extrabold cursor-pointer text-red-500"><ion-icon name="close-outline"></ion-icon></span>
              </div>
            </div>

            <div className="flex justify-between text-[16px] font-semibold mt-5">
              <h3>Subtotal:</h3>
              <h3>$656</h3>
            </div>

            <div className="mt-4">
              <NavLink to={"/dashboard/favorites"}>
                <button className="w-full bg-yellow-400 font-extralight py-3 px-6 rounded-full hover:bg-yellow-500 transition-all shadow-md flex justify-center text-black">
                  View Favorites
                </button>
              </NavLink>
              <NavLink to={"/dashboard/payment"}>
                <button className="w-full bg-yellow-400 font-extralight py-3 px-6 mt-3 rounded-full hover:bg-yellow-500 transition-all shadow-md flex justify-center text-black">
                  Checkout
                </button>
              </NavLink>
            </div>

          </div>
        </div>}
      </div>
    </section>
  );
};

export default Main;
