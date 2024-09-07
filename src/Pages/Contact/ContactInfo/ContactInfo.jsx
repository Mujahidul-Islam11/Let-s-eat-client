import React from "react";
import { NavLink } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div className="w-full flex items-center p-10 my-12">
      {/* Part-1 */}
      <div className="w-1/2 space-y-5">
        <h3 className="text-xl -mb-3 font-extralight text-red-400"><i>Our Contacts</i></h3>
        <h2 className="text-5xl">Get in Touch</h2>
        <p>
          Have questions, feedback, or special requests? We're here to help!
          Whether you're planning a big event, curious about our menu, or just
          want to say hello, feel free to reach out. Let's make your 'Let's Eat'
          experience even better!
        </p>
        {/* Icons and details */}
        <div className="space-y-5">
          <a
            target="_blank"
            href="https://www.google.com/maps/place/Rangunia/@22.4700812,92.0462143,14z/data=!3m1!4b1!4m6!3m5!1s0x30ad371e5863866f:0x7ce1e86cb3a24604!8m2!3d22.4698078!4d92.0518154!16s%2Fg%2F121x28tn?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
            className="flex gap-3 items-center group"
          >
            <h3 className="text-3xl border flex rounded-full items-center p-3 bg-yellow-400 text-white transition-all duration-300 cursor-pointer group-hover:bg-white group-hover:border-yellow-300 group-hover:text-black">
              <ion-icon name="location-outline"></ion-icon>
            </h3>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Visit Us</h3>
              <p className="font-extralight text-gray-600">Chattogram - Rangunia, Bangladesh</p>
            </div>
          </a>
          <a
            href="mailto:web.dev.dinar@gmail.com"
            className="flex gap-3 items-center group"
          >
            <h3 className="text-2xl border flex rounded-full items-center p-4 bg-yellow-400 text-white transition-all duration-300 cursor-pointer group-hover:bg-white group-hover:border-yellow-300 group-hover:text-black">
              <ion-icon name="send-outline"></ion-icon>
            </h3>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Mail Us</h3>
              <p className="font-extralight text-gray-600">web.dev.dinar@gmail.com</p>
            </div>
          </a>
          <a
            href="tell:01889112836"
            className="flex gap-3 items-center group"
          >
            <h3 className="text-3xl border flex rounded-full items-center p-3 bg-yellow-400 text-white transition-all duration-300 cursor-pointer group-hover:bg-white group-hover:border-yellow-300 group-hover:text-black">
              <ion-icon name="location-outline"></ion-icon>
            </h3>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">Call Us</h3>
              <p className="font-extralight text-gray-600">01889112836</p>
            </div>
          </a>
        </div>
      </div>

      {/* Part-2 */}
      <div className="w-1/2">
        <img
        className="w-full h-full mt-12"
          src="https://imagizer.imageshack.com/img924/6039/Tpd5Zk.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ContactInfo;
