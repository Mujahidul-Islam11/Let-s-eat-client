import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { Toaster, toast } from "sonner";
import useFavorites from "../hooks/useFavorites";
import useAxiosSecure from "../hooks/useAxiosSecure";
import FavDrawer from "../Pages/Home/FavDrawer/FavDrawer";

const Main = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openFavorite, setOpenFavorite] = useState(false);
  const [favItems, refetch] = useFavorites();
  const totalPrice = favItems.reduce((total, item) => total + item?.price, 0)
  const axiosSecure = useAxiosSecure();

  if (!openFavorite) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }


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
        {openFavorite && <FavDrawer totalPrice={totalPrice} setOpenFavorite={setOpenFavorite} handleDelete={handleDelete} favItems={favItems}/>}
      </div>
    </section>
  );
};

export default Main;
