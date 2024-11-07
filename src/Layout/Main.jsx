import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { Toaster, toast } from "sonner";
import useFavorites from "../hooks/useFavorites";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Main = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openFavorite, setOpenFavorite] = useState(false);
  const [favItems, refetch] = useFavorites();
  const totalPrice = favItems.reduce((total, item) => total + item?.price, 0)
  const axiosSecure = useAxiosSecure();

// item delete handler
const handleDelete = (itemData) => {
  toast.custom((t) => (
    <div className="shadow-xl p-4 rounded-md bg-white mb-8 space-y-4">
      <span className="flex justify-center border text-red-300 border-red-300 w-fit mx-auto text-3xl rounded-full p-3">
        <ion-icon name="alert-outline"></ion-icon>
      </span>
      <h1 className="text-center">
        Are you sure you want to remove {itemData?.name} from favorites??
      </h1>
      <div className="flex justify-center gap-12">
        <button
          onClick={() => {
            toast.dismiss(t);
          }}
          className="text-sm md:text-[16px] bg-green-500 font-extralight py-2 px-5 rounded-full hover:bg-green-600 transition-all size-fit shadow-md text-white"
        >
          No
        </button>
        <button
          onClick={() => {
            toast.dismiss(t);
            deleteItem();
          }}
          className="text-sm md:text-[16px] bg-red-500 font-extralight py-2 px-5 rounded-full hover:bg-red-600 transition-all size-fit shadow-md text-white"
        >
          Yes
        </button>
      </div>
    </div>
  ));

  const deleteItem = () => {
    axiosSecure
      .delete(`/favorites/${itemData?._id}`)
      .then((result) => {
        if (result.data.deletedCount > 0) {
          toast.success(
            `Successfully deleted ${itemData?.name} from favorites!`,
            {
              duration: 3000,
            }
          );
          refetch();
        }
      })
      .catch((err) => {
        toast.error(`Oops! something went wrong, please try again.`, {
          duration: 3000,
        });
      });
  };
};
  return (
    <section className="relative">
      <div onClick={() => setOpenMenu(false)} className="w-full lg:max-w-7xl lg:mx-auto">
        <Toaster richColors />
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
              {favItems?.map(item => (
                <div key={item?._id} className="border-b flex justify-between items-center py-2">
                  <div className="flex gap-4 items-center">
                    <img className="size-[80px] object-cover rounded-md" src={item?.img} alt="" />
                    <div className="space-y-2">
                      <h3 className="font-semibold">{item?.name}</h3>
                      <p className="text-sm text-gray-700">${item?.price}</p>
                    </div>
                  </div>
                  <span onClick={()=>{handleDelete(item)}} className="text-[22px] font-extrabold cursor-pointer text-red-500"><ion-icon name="close-outline"></ion-icon></span>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-[16px] font-semibold mt-5">
              <h3>Subtotal:</h3>
              <h3>${totalPrice || 0}</h3>
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
