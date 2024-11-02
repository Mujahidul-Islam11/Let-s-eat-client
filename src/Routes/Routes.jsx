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
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";

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
      // user routes
      {
        path: "favorites",
        element: <MyFavorites/>
      },
      {
        path: "payment",
        element: <Payment/>
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory/>,
      },
      {
        path: "userHome",
        element: <UserHome/>,
      },

      // admin routes
      {
        path: "users",
        element: <AdminRoute><AllUsers/></AdminRoute>
      },
      {
        path: "addItems",
        element: <AdminRoute><AddItems/></AdminRoute>
      },
      {
        path: "manageItems",
        element: <AdminRoute><ManageItems/></AdminRoute>
      },
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome/></AdminRoute>
      },
    ]
  },
]);
