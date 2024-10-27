import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";

const Banner = () => {
  const [contents, setContents] = useState([]);
  useEffect(() => {
    fetch("/banner.json")
      .then((res) => res.json())
      .then((data) => setContents(data));
  }, []);
  return (
    <div className="">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        speed={1000}
        className="mySwiper"
      >
        {contents?.map((content) => (
          <SwiperSlide key={content?.url}>
            <div
              style={{
                backgroundImage: `url(${content?.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="relative w-full h-[350px] md:h-[600px] object-cover"
            >
              <div className="absolute z-20 w-full h-full text-center flex items-center justify-center">
                <div className="bg-black bg-opacity-35 mx-4 md:mx-0 py-8 md:py-14 px-8 ">
                  <h1 className="text-4xl md:text-6xl font-extrabold text-[#FAAA1B]">
                    {content?.title}
                  </h1>
                  <p className="text-lg md:text-2xl font-light text-white">
                    {content?.desc}
                  </p>
                  <NavLink to={"/shop"}>
                  <button className="bg-white px-6 py-3 mt-4 rounded-full font-extrabold text-black">
                    Order Now
                  </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
