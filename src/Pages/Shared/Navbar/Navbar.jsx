import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLists = (
    <>
      <li className="hover:text-[#F0C333] transition duration-300">
        <Link to="/" className="text-[#000] lg:text-[16px]">
          Home
        </Link>
      </li>
      <li className="hover:text-[#F0C333] transition duration-300">
        <Link to="/contact" className="text-[#000] lg:text-[16px]">
          Contact Us
        </Link>
      </li>
      <li className="hover:text-[#F0C333] transition duration-300">
        <Link to="/menu" className="text-[#000] lg:text-[16px]">
          Our Menu
        </Link>
      </li>
      <li className="hover:text-[#F0C333] transition duration-300">
        <Link to="/shop" className="text-[#000] lg:text-[16px]">
          Our Shop
        </Link>
      </li>
      <li className="hover:text-[#F0C333] transition duration-300">
        <Link to="/dashboard" className="text-[#000] lg:text-[16px]">
          Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-white shadow-lg mt-4">
      <nav className="border-b w-full flex justify-between items-center px-4 md:px-6 py-2">
        {/* nav-1 start*/}
        <div className="flex items-center">
          {/* Small device menu button */}
          <div className="block md:hidden text-2xl md:text-3xl cursor-pointer mt-5">
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <Link to={"/"} className="ml-4">
            <img
              className="w-32 md:w-44 lg:w-56"
              src="https://imagizer.imageshack.com/img922/4374/m4qNbj.png"
              alt="Logo"
            />
          </Link>
        </div>
        {/* nav-1 end*/}

        {/* nav-2 start*/}
        <div className="hidden md:flex justify-center flex-grow">
          <ul className="flex space-x-4 md:space-x-6 lg:space-x-8 items-center">
            {navLists}
          </ul>
        </div>
        {/* nav-2 end*/}

        {/* nav-3 start*/}
        <div className="flex items-center space-x-0 md:space-x-4">
          <div className="text-lg md:text-2xl border border-yellow-200 flex justify-center items-center shadow-md cursor-pointer rounded-full p-2 md:p-3">
            <ion-icon name="cart-outline"></ion-icon>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-8 md:w-12 rounded-full">
                <img
                  alt="Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <h3 className="text-sm text-[#000]">
                  Mohammad Mojahidul Islam
                </h3>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <button className="hidden md:inline-block rounded-md bg-[#F0C333] hover:bg-[#E0B227] transition duration-300 py-2 px-6 text-[#000]">
            Log In
          </button>
        </div>
        {/* nav-3 end*/}
      </nav>
    </div>
  );
};

export default Navbar;
