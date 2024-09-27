import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div
      key={item?.name}
      className="flex flex-col items-center text-center hover:scale-105 duration-300 cursor-pointer py-3 px-4 rounded-md shadow-xl"
    >
      <img
        className="w-36 h-36 mb-4 rounded-full object-cover -mt-20"
        src={item?.img}
        alt={item?.name}
      />
      <div className="text-center space-y-2">
        <div className="flex justify-between px-6 items-center">
          <p className="text-yellow-500">{item?.rating} ★</p>
          <h3 className="text-2xl">
            <ion-icon name="heart-outline"></ion-icon>
          </h3>
        </div>
        <h3 className="text-lg font-semibold">{item?.name}</h3>
        <p className="text-sm">{item?.desc}</p>
        <p className="font-bold text-lg">${item?.price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
