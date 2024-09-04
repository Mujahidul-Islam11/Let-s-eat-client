import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navLists = (
      <>
        <Link to="/" className="text-[#000] text-[16px]"><li>Home</li></Link>
        <Link to="/contact" className="text-[#000] text-[16px]"><li>Contact Us</li></Link>
        <Link to="/menu" className="text-[#000] text-[16px]"><li>Our Menu</li></Link>
        <Link to="/shop" className="text-[#000] text-[16px]"><li>Our Shop</li></Link>
        <Link to="/dashboard" className="text-[#000] text-[16px]"><li>Dashboard</li></Link>
      </>
    );

  return (
    <div className="">
      <nav className="border rounded-md mt-4 w-full flex items-center px-6">
        <div id="nav-1" className="w-[25%]">
          {/* Small device menu button */}
          <div id="smallNav"></div>
          <img
            className="w-56 h-24 object-cover"
            src="https://imagizer.imageshack.com/img924/6582/D5asgV.png"
            alt=""
          />
        </div>

        <div id="nav-2" className="w-[50%] h-24 flex items-center">
          <ul className="flex gap-10 mt-3">
            {navLists}
          </ul>
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
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
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
