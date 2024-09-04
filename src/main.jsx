import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import { router } from "/src/routes/Routes";
import "./index.css";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="mx-6 md:mx-2 lg:max-w-7xl mx-auto">
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
