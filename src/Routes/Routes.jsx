import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ContactUs from "../Pages/Contact/ContactUs/ContactUs";
import Error from "../Pages/Error/Error";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop/Shop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyFavorites from "../Pages/Dashboard/MyFavorites/MyFavorites";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/contact",
        element: <ContactUs/>,
      },
      {
        path: "/menu",
        element: <Menu/>,
      },
      {
        path: "/shop",
        element: (
          <PrivateRoute>
            <Shop/>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signUp",
        element: <SignUp/>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard/>
      </PrivateRoute>
    ),
    children: [
      {
        path: "favorites",
        element: <MyFavorites/>
      },
      {
        path: "users",
        element: <AllUsers/>
      },
    ]
  },
]);
