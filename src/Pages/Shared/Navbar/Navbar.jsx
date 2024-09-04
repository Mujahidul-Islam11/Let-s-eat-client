import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLists = (
    <>
      <Link to="/" className="text-[#000] lg:text-[16px]">
        <li>Home</li>
      </Link>
      <Link to="/contact" className="text-[#000] lg:text-[16px]">
        <li>Contact Us</li>
      </Link>
      <Link to="/menu" className="text-[#000] lg:text-[16px]">
        <li>Our Menu</li>
      </Link>
      <Link to="/shop" className="text-[#000] lg:text-[16px]">
        <li>Our Shop</li>
      </Link>
      <Link to="/dashboard" className="text-[#000] lg:text-[16px]">
        <li>Dashboard</li>
      </Link>
    </>
  );

  return (
    <div className="">
      <nav className="border rounded-md mt-4 w-full flex justify-between items-center px-6">
        <div id="nav-1" className="md:w-[25%] flex items-center gap-3">
          {/* Small device menu button */}
          <div
            id="smallNav"
            className="block md:hidden text-3xl mt-7 cursor-pointer"
          >
            <ion-icon name="menu-outline"></ion-icon>
          </div>
          <Link to={"/"}>
            <img
              className="w-44 md:w-44 lg:w-56 md:h-24"
              src="https://imagizer.imageshack.com/img924/6582/D5asgV.png"
              alt=""
            />
          </Link>
        </div>

        <div id="nav-2" className="hidden md:flex items-center w-[50%] h-24">
          <ul className="flex md:gap-3 lg:gap-10 mt-3">{navLists}</ul>
        </div>

        <div id="nav-3" className="w-1/4 flex justify-end h-24">
          <div className="flex items-center gap-5">
            <div className="text-2xl border border-yellow-200 shadow-md cursor-pointer rounded-full p-3 flex items-center">
              <ion-icon name="cart-outline"></ion-icon>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-16 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li className="">
                  <h3 className="text-sm text-[#000]">
                    Mohammad Mojahidul Islam
                  </h3>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            <button className="hidden rounded-md bg-[#F0C333] hover:bg-opacity-85 py-2 px-6 text-[#000]">
              Log In
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
