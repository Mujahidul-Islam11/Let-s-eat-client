import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="my-12 relative overflow-x-hidden">
      <img
        className="absolute -right-72 z-10 top-0"
        src="https://imagizer.imageshack.com/img923/8439/ohfUmr.png"
        alt=""
      />
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-lg text-muted-foreground mt-4">
            Discover the wide range of services we offer to make your events
            unforgettable.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-20">
          {services?.map((service) => (
            <div
              key={service?.title}
              className="bg-white bg-opacity-70 shadow-md rounded-md px-4 py-5"
            >
              <div className="flex items-center space-x-4 py-6">
                <h3 className="text-4xl text-red-400">
                  <ion-icon name={service?.icon}></ion-icon>
                </h3>
                <div>
                  <h3 className="text-xl font-semibold">{service?.title}</h3>
                </div>
              </div>
              <div className="py-6">
                <p className="text-muted-foreground">{service?.description}</p>
              </div>
              <div className="py-6">
                <a href="#" className="hover:text-yellow-600 hover:underline">
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
