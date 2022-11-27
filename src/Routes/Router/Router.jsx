import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout/DashboardLayout';
import Main from '../../Layout/Main/Main';
import AddProduct from '../../Pages/AddProduct/AddProduct';
import AllBuyers from '../../Pages/AllBuyers/AllBuyers';
import AllUsers from '../../Pages/AllUsers/AllUsers';
import Blog from '../../Pages/Blog/Blog';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Items from '../../Pages/HomeAll/Categories/Items/Items';
import Home from '../../Pages/HomeAll/Home/Home'
import MyOrders from '../../Pages/MyOrders/MyOrders';
import MyProducts from '../../Pages/MyProducts/MyProducts';
import Login from '../../Pages/Shared/Login/Login';
import SignUp from '../../Pages/Shared/SignUp/SignUp';
import PrivetRout from '../../PrivetRout/PrivetRout';
import SelearRout from '../../SelearRout/SelearRout';

const Router = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            errorElement: <ErrorPage></ErrorPage>,
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/items/:id',
                    loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`),
                    element: <PrivetRout><Items></Items></PrivetRout>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/signup',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                }
            ]
        },
        {
            path: '/dashboard',
            element: <PrivetRout><DashboardLayout></DashboardLayout></PrivetRout>,
            children: [
                {
                    path: '/dashboard',
                    element: <MyOrders></MyOrders>
                },
                {
                    path: '/dashboard/addproduct',
                    element: <SelearRout><AddProduct></AddProduct></SelearRout>
                },
                {
                    path: '/dashboard/myproducts',
                    element: <SelearRout><MyProducts></MyProducts></SelearRout>
                },
                {
                    path: '/dashboard/allusers',
                    element: <AllUsers></AllUsers>
                },
                {
                    path: '/dashboard/allbuyers',
                    element: <AllBuyers></AllBuyers>
                }
            ]

        }
    ])

    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
};

export default Router;