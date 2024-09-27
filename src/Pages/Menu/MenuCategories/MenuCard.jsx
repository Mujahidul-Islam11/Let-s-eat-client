import React from 'react';

const MenuCard = ({item}) => {
    return (
            <div
              key={item?.name}
              className="flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer"
            >
              <img
                className="w-40 h-40 mb-4 rounded-full object-cover"
                src={item?.img}
                alt={item?.name}
              />
              <div className="text-center space-y-2">
                <h3 className="text-lg font-semibold">{item?.name}</h3>
                <p className="text-sm">{item?.desc}</p>
                <p className="font-bold text-lg">${item?.price}</p>
                <p className="text-yellow-500">{item?.rating} ★</p>
              </div>
            </div>
    );
};

export default MenuCard;