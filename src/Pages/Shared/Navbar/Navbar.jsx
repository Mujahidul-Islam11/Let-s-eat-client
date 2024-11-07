import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import useFavorites from "../../../hooks/useFavorites";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = ({ openMenu, setOpenMenu, setOpenFavorite }) => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [favItems] = useFavorites();

  const handleLogOut = () => {
    logOut();
  };

  const navLists = (
    <>
      <li>
        <Link to="/" className="text-[#000] lg:text-[16px] hover:text-yellow-400 duration-100">
          Home
        </Link>
      </li>
      <li>
        <Link to="/contact" className="text-[#000] lg:text-[16px] hover:text-yellow-400 duration-100">
          Contact Us
        </Link>
      </li>
      <li>
        <Link to="/menu" className="text-[#000] lg:text-[16px] hover:text-yellow-400 duration-100">
          Our Menu
        </Link>
      </li>
      <li>
        <Link to={`${user ? "/shop" : "/login"}`} className="text-[#000] lg:text-[16px] hover:text-yellow-400 duration-100">
          Our Shop
        </Link>
      </li>
      {user && isAdmin && <li>
        <Link to={"/dashboard/adminHome"} className="text-[#000] lg:text-[16px] hover:text-yellow-400 duration-100">
          Dashboard
        </Link>
      </li>}
      {user && !isAdmin && <li>
        <Link to={"/dashboard/userHome"} className="text-[#000] lg:text-[16px] hover:text-yellow-400 duration-100">
          Dashboard
        </Link>
      </li>}
    </>
  );

  return (
    <div className="text-black">
      {/*drawer - Small device */}
      {openMenu && (
        <div className="z-50 w-40 h-40 absolute top-[70px] left-3 bg-white shadow-md px-6 py-3 rounded-md">
          <ul className="space-y-1">{navLists}</ul>
        </div>
      )}

      <div className="bg-white shadow-lg mt-4 mx-2 lg:mx-0">
        <nav className="border-b w-full flex justify-between items-center px-2 md:px-4 py-1">
          {/* nav-1*/}
          <div className="flex items-center">

            {/* Small device menu button */}
            <div
              onClick={(e) => {
                e.stopPropagation(); 
                setOpenMenu(!openMenu); 
              }}
              className="block md:hidden text-2xl cursor-pointer mt-5 text-black"
            >
              {openMenu ? (
                <button>
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              ) : (
                <button>
                  <ion-icon name="menu-outline"></ion-icon>
                </button>
              )}
            </div>
            <Link to={"/"} className="">
              <img
                className="w-32 md:w-40 lg:w-52"
                src="https://imagizer.imageshack.com/img922/4374/m4qNbj.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* nav-2*/}
          <div className="hidden md:flex justify-center flex-grow">
            <ul className="flex space-x-4 md:space-x-6 lg:space-x-8 items-center">
              {navLists}
            </ul>
          </div>

          {/* nav-3*/}
          <div className="flex items-center space-x-0 md:space-x-4">

            <div onClick={() => setOpenFavorite(true)} className="relative text-lg md:text-2xl border text-red-400 flex justify-center items-center shadow-md cursor-pointer rounded-full p-2 md:p-3">
              <ion-icon name="heart-outline"></ion-icon>
              {favItems.length > 0 && <span className="absolute -top-1 right-0 h-[14px] w-[14px] rounded-full bg-red-400"></span>}
            </div>
            {user ? (
              <div className="dropdown dropdown-end z-50">
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
                  className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <h3 className="text-sm text-gray-600">
                      {user?.displayName}
                    </h3>
                  </li>
                  <li className="text-black">
                    <button onClick={() => handleLogOut()}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink to={"/login"}>
                <button className="text-sm md:text-lg ml-2 md:ml-0 bg-yellow-400 text-black font-extralight py-2 px-4 md:px-6 rounded-full hover:bg-yellow-500 transition-all size-fit shadow-md flex justify-center">
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
