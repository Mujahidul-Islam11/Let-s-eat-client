import React from "react";

const Breadcrumbs = ({ routeName, pageTitle }) => {
  return (
    <section className="space-y-8 mb-8">
      <h3 className="text-xs">
        Dashboard <ion-icon name="chevron-forward-outline"></ion-icon>{" "}
        <span className="text-yellow-500">{routeName}</span>
      </h3>

      <h3 className="text-2xl font-bold">{pageTitle}</h3>
    </section>
  );
};

export default Breadcrumbs;
