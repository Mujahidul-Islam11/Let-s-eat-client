import { createBrowserRouter } from "react-router-dom"
import Main from "../Layout/Main"
import Home from "../Pages/Home/Home/Home"
import ContactUs from "../Pages/Contact/ContactUs/ContactUs"
import Error from "../Pages/Error/Error"
import Menu from "../Pages/Menu/Menu/Menu"

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/contact",
            element: <ContactUs></ContactUs>
        },
        {
            path: "/menu",
            element: <Menu></Menu>
        },
      ]
    },
  ])