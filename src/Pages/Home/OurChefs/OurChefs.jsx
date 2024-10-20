import { useEffect, useState } from "react";
import SectionTitle from "../../../UI/SectionTitle/SectionTitle";

const OurChefs = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("/chefs.json")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <section className="my-12">
      <SectionTitle
        title={"Meet Our Chefs"}
        desc={"Our chefs are the heart of our kitchen."}
      />
      <div className="flex flex-col md:flex-row justify-center items-center gap-24 md:gap-8 py-12 px-4 text-black">
        {chefs?.map((chef) => (
          <div
            key={chef.id}
            className="bg-white shadow-lg rounded-lg px-3 pb-6 w-fit md:w-1/2 text-center space-y-3 border hover:scale-105 duration-300"
          >
            <div className="w-[170px] h-[170px] border-t-2 mx-auto bg-white -mt-20 rounded-full flex items-center">
            <img
              className="w-40 h-40 rounded-full mx-auto object-cover"
              src={chef.img}
              alt={`Chef ${chef.name}`}
            />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-wrap">
              {chef.name}
            </h3>
            <p className="text-gray-600">{chef.info}</p>
            <div className="flex justify-center gap-4">
              <a className="text-2xl border border-yellow-300 hover:bg-yellow-300 hover:text-white transition-all duration-300 p-2 flex items-center rounded-full" href="#" target="_blank">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a className="text-2xl border border-yellow-300 hover:bg-yellow-300 hover:text-white transition-all duration-300 p-2 flex items-center rounded-full" href="#" target="_blank">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a className="text-2xl border border-yellow-300 hover:bg-yellow-300 hover:text-white transition-all duration-300 p-2 flex items-center rounded-full" href="#" target="_blank">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurChefs;
