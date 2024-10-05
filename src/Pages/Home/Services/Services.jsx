import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="my-12 relative overflow-x-hidden py-10">
      <img
        className="absolute -right-72 z-10 top-0"
        src="https://imagizer.imageshack.com/img923/8439/ohfUmr.png"
        alt=""
      />
      <img
        className="absolute -left-60 z-10 bottom-0"
        src="https://imagizer.imageshack.com/img923/8439/ohfUmr.png"
        alt=""
      />
      <div className="container mx-auto px-4 relative z-20">
        <SectionTitle
          title={"Our Services"}
          desc={
            "Discover the wide range of services we offer to make your events unforgettable."
          }
        ></SectionTitle>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:px-20">
          {services?.map((service) => (
            <div
              key={service?.title}
              className="bg-white bg-opacity-70 shadow-md rounded-md px-3 md:px-4 py-4 md:py-5"
            >
              <div className="flex items-center space-x-4 py-3 md:py-4">
                <h3 className="text-3xl md:text-4xl text-red-400">
                  <ion-icon name={service?.icon}></ion-icon>
                </h3>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-black">
                    {service?.title}
                  </h3>
                </div>
              </div>
              <div className="py-3 md:py-4">
                <p className="text-sm md:text-[16px] text-gray-800">{service?.description}</p>
              </div>
              <div className="py-3 md:py-4">
                <a href="#" className="hover:text-yellow-600 hover:underline text-black">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
