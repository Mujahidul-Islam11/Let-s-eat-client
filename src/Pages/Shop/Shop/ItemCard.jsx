import React, { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const ItemCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleAddToList = (food) => {
    if (user && user.email) {
      const favItem = {
        menuId: item._id,
        email: user.email,
        name: item.name,
        img: item.img,
        price: item.price,
      };

      // send data to database
      axiosSecure
        .post("/favorites", favItem)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success(`${item.name} added to the favorites`);
          } else {
            toast.error("Oops! Something went wrong");
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error("Oops! Something went wrong");
        });
    } else {
      navigate("/login");
    }
  };
  return (
    <div
      key={item?.name}
      className="flex flex-col items-center text-center cursor-pointer py-3 px-4 rounded-md shadow-xl"
    >
      <img
        className="w-36 h-36 mb-4 rounded-full object-cover -mt-20"
        src={item?.img}
        alt={item?.name}
      />
      <div className="text-center space-y-2">
        <div className="flex justify-between px-6 items-center">
          <p className="text-yellow-500">{item?.rating} ★</p>
          <button onClick={() => handleAddToList(item)} className="text-3xl hover:text-red-500 hover:scale-125 duration-300">
            <ion-icon name="heart-outline"></ion-icon>
          </button>
        </div>
        <h3 className="text-lg font-semibold">{item?.name}</h3>
        <p className="text-sm">{item?.desc}</p>
        <p className="font-bold text-lg">${item?.price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
