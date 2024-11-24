import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout';
import ErrorPage from '../Layouts/ErrorPage';
import AuthLayout from '../Components/AuthLayout/AuthLayout';
import Login from '../Components/Login-Register/Login';

import ForgetPassword from '../Components/Login-Register/ForgetPassword';
import Register from '../Components/Login-Register/Register';
import MyProfile from '../Components/Profile/MyProfile';
import PrivateRoute from './PrivateRoute';
import UpdateProfile from '../Components/Profile/UpdateProfile';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "children",
                element: <h2>This is childreen part</h2>
            }
        ]    
    },
    {
        path: "/brands",
        element:  <h3>This is brands page</h3>
    }
    ,
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path:"/auth/login",
                element: <Login></Login>
            },
            {
                path:"/auth/register",
                element: <Register></Register>
            },
            {
                path:"/auth/forgetpassword",
                element: <ForgetPassword></ForgetPassword>
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
              }
              
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    },
]);

export default Router;