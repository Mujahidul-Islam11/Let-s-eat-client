import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { toast } from "sonner";
import auth from "../../../firebase.config";
import useAdmin from "../../../hooks/useAdmin";

const Sidebar = () => {
  const {logOut} = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  
  const handleLogout = () =>{
    logOut(auth)
    .then(()=>{
      toast("Successfully logged out!")
    })
  }


  return (
    <div className="h-full w-52 md:w-72 bg-white border-r border-b flex flex-col justify-between relative shadow-lg md:shadow-none rounded-lg md:rounded-none">
      <section>
      {isAdmin? <ul className="py-4 md:py-6 px-2 md:px-4">
        <Link>
          <li className="md:text-lg rounded-md flex items-center gap-3 hover:bg-[#F7F8FA] py-2 md:py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-200 mt-1 text-gray-600">
              <ion-icon name="grid-outline"></ion-icon>
            </span>
            <span className="text-gray-700">Dashboard</span>
          </li>
        </Link>
        <Link to={"/dashboard/addItems"}>
          <li className="md:text-lg rounded-md flex items-center gap-3 hover:bg-[#F7F8FA] py-2 md:py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-200 mt-1 text-gray-600">
              <ion-icon name="fast-food-outline"></ion-icon>
            </span>
            <span className="text-gray-700">Add Items</span>
          </li>
        </Link>
        <Link to={"/dashboard"}>
          <li className="md:text-lg rounded-md flex items-center gap-3 hover:bg-[#F7F8FA] py-2 md:py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-200 mt-1 text-gray-600">
            <ion-icon name="list-outline"></ion-icon>
            </span>
            <span className="text-gray-700">Manage Items</span>
          </li>
        </Link>
        <Link>
          <li className="md:text-lg rounded-md flex items-center gap-3 hover:bg-[#F7F8FA] py-2 md:py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-200 mt-1 text-gray-600">
            <ion-icon name="clipboard-outline"></ion-icon>
            </span>
            <span className="text-gray-700">Manage Bookings</span>
          </li>
        </Link>
        <Link to={"/dashboard/users"}>
          <li className="md:text-lg rounded-md flex items-center gap-3 hover:bg-[#F7F8FA] py-2 md:py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-200 mt-1 text-gray-600">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className="text-gray-700">All Users</span>
          </li>
        </Link>
      </ul>: <ul className="py-4 md:py-6 px-2 md:px-4">
        <Link>
          <li className="md:text-lg rounded-md flex items-center gap-3 hover:bg-[#F7F8FA] py-2 md:py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-200 mt-1 text-gray-600">
              <ion-icon name="grid-outline"></ion-icon>
            </span>
            <span className="text-gray-700">Dashboard</span>
          </li>
        </Link>
        <Link>
          <li className="md:text-lg rounded-md flex items-center gap-3 hover:bg-[#F7F8FA] py-2 md:py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-200 mt-1 text-gray-600">
              <ion-icon name="calendar-clear-outline"></ion-icon>
            </span>
            <span className="text-gray-700">Reservation</span>
          </li>
        </Link>
        <Link to={"/dashboard/favorites"}>
          <li className="md:text-lg rounded-md flex items-center gap-3 hover:bg-[#F7F8FA] py-2 md:py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-200 mt-1 text-gray-600">
              <ion-icon name="heart-outline"></ion-icon>
            </span>
            <span className="text-gray-700">My Favorites</span>
          </li>
        </Link>
        <Link>
          <li className="md:text-lg rounded-md flex items-center gap-3 hover:bg-[#F7F8FA] py-2 md:py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-200 mt-1 text-gray-600">
              <ion-icon name="star-outline"></ion-icon>
            </span>
            <span className="text-gray-700">Add a Review</span>
          </li>
        </Link>
        <Link>
          <li className="md:text-lg rounded-md flex items-center gap-3 hover:bg-[#F7F8FA] py-2 md:py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-200 mt-1 text-gray-600">
              <ion-icon name="clipboard-outline"></ion-icon>
            </span>
            <span className="text-gray-700">My Bookings</span>
          </li>
        </Link>
      </ul>}
      </section>
      <section>
      <ul className="py-4 md:py-6 px-2 md:px-4">
        <Link>
          <li className="md:text-lg rounded-md flex items-center gap-3 hover:bg-[#F7F8FA] py-2 md:py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-200 mt-1 text-gray-600">
              <ion-icon name="settings-outline"></ion-icon>
            </span>
            <span className="text-gray-700">Settings</span>
          </li>
        </Link>
        <Link>
          <li onClick={()=> handleLogout()} className="md:text-lg rounded-md flex items-center gap-3 hover:bg-[#F7F8FA] py-2 md:py-3 px-6 group transition-all">
            <span className="group-hover:text-yellow-500 duration-200 mt-1 text-gray-600">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            <span className="text-gray-700">Logout</span>
          </li>
        </Link>
      </ul>
      </section>
    </div>
  );
};

export default Sidebar;
