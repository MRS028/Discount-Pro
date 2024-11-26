import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import ErrorPage from "../Layouts/ErrorPage";
import AuthLayout from "../Components/AuthLayout/AuthLayout";
import Login from "../Components/Login-Register/Login";

import ForgetPassword from "../Components/Login-Register/ForgetPassword";
import Register from "../Components/Login-Register/Register";
import MyProfile from "../Components/Profile/MyProfile";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../Components/Profile/UpdateProfile";
import BrandsPage from "../Components/Brands/BrandsPage";
import Home from "../Layouts/Home";
import CouponPage from "../Components/Coupon/CouponPage";
import AboutUs from "../Layouts/AboutUs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/brands",
        element: <BrandsPage></BrandsPage>,
        loader: () => fetch("/coupons.json"),
      },
      {
        path: "brands/:id",
        element: (
          <PrivateRoute>
            <CouponPage></CouponPage>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch("/coupons.json");
          const data = await response.json();

          const brand = data.find((item) => String(item._id) === params.id);

          if (!brand) {
            throw new Error("Brand not found");
          }

          return brand;
        },
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
    ],
  },

  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forgetpassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/auth/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },

      {
        path: "/auth/my-profile/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default Router;
