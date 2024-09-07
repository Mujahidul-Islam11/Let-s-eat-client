import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../Pages/Home/Home/Home"
import ContactUs from "../Pages/Contact/ContactUs/ContactUs"

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/contact",
            element: <ContactUs></ContactUs>
        },
      ]
    },
  ])