import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const DashNavbar = ({ setDrawerOpen, drawerOpen }) => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-white px-6 flex justify-between items-center border-b">
      {/* Logo */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-2"
      >
        <span
          onClick={() => setDrawerOpen(!drawerOpen)}
          className="text-2xl flex md:hidden mt-3"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </span>
        <Link to={"/"} className="">
          <img
            className="w-32 md:w-40 lg:w-52"
            src="https://imagizer.imageshack.com/img922/4374/m4qNbj.png"
            alt="Logo"
          />
        </Link>
      </div>

      {/* User Section */}
      <div className="flex items-center gap-4">
        <div className="hidden md:flex flex-col items-end">
          <span className="text-gray-800 font-medium">{user?.displayName}</span>
          <span className="text-sm text-gray-500">Admin</span>
        </div>
        <img
          src={user?.photoURL}
          alt="User Profile"
          className="w-10 h-10 rounded-full object-cover hidden md:flex"
        />
        <div className="dropdown dropdown-end z-50 visible md:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-8 md:w-12 rounded-full">
              <img src={user?.photoURL} alt="" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-44 p-2 shadow"
          >
            <li>
              <h3 className="text-gray-900 font-semibold">{user?.displayName}</h3>
            </li>
            <li>
              <h3 className="text-sm text-gray-500">Admin</h3>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default DashNavbar;
