import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout';
import ErrorPage from '../Layouts/ErrorPage';

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
        path: "*",
        element: <ErrorPage></ErrorPage>
    },
]);

export default Router;