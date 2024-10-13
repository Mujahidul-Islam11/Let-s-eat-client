import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white shadow-lg">
      <ul className="">
        <Link>
          <li className="text-lg flex items-center gap-3 hover:bg-gray-100 py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-300 mt-1 text-gray-600">
              <ion-icon name="grid-outline"></ion-icon>
            </span>
            <span className="text-gray-700">Dashboard</span>
          </li>
        </Link>
        <Link>
          <li className="text-lg flex items-center gap-3 hover:bg-gray-100 py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-300 mt-1 text-gray-600">
              <ion-icon name="calendar-clear-outline"></ion-icon>
            </span>
            <span className="text-gray-700">Reservation</span>
          </li>
        </Link>
        <Link>
          <li className="text-lg flex items-center gap-3 hover:bg-gray-100 py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-300 mt-1 text-gray-600">
              <ion-icon name="heart-outline"></ion-icon>
            </span>
            <span className="text-gray-700">My Favorites</span>
          </li>
        </Link>
        <Link>
          <li className="text-lg flex items-center gap-3 hover:bg-gray-100 py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-300 mt-1 text-gray-600">
              <ion-icon name="star-outline"></ion-icon>
            </span>
            <span className="text-gray-700">Add a Review</span>
          </li>
        </Link>
        <Link>
          <li className="text-lg flex items-center gap-3 hover:bg-gray-100 py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-300 mt-1 text-gray-600">
              <ion-icon name="clipboard-outline"></ion-icon>
            </span>
            <span className="text-gray-700">My Bookings</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
