import React from "react";

const Location = () => {
  return (
    <div className="my-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0935304137947!2d92.05753597405695!3d22.500673735605023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad31efdd14231b%3A0x818413aebabaef29!2sRanirhat%20rangonia%20chittagong!5e0!3m2!1sen!2sbd!4v1725705528822!5m2!1sen!2sbd"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[300px] md:h-[400px]"
      />
    </div>
  );
};

export default Location;
