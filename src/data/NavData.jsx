import { Link } from "react-router-dom";

export const navLists = (
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
        <Link to="/shop" className="text-[#000] lg:text-[16px] hover:text-yellow-400 duration-100">
          Our Shop
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className="text-[#000] lg:text-[16px] hover:text-yellow-400 duration-100">
          Dashboard
        </Link>
      </li>
    </>
  );