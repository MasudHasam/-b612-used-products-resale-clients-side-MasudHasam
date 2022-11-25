import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import AddProduct from '../../Pages/AddProduct/AddProduct';
import Blog from '../../Pages/Blog/Blog';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Items from '../../Pages/HomeAll/Categories/Items/Items';
import Home from '../../Pages/HomeAll/Home/Home'
import MyProducts from '../../Pages/MyProducts/MyProducts';
import Login from '../../Pages/Shared/Login/Login';
import SignUp from '../../Pages/Shared/SignUp/SignUp';

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
                    element: <Items></Items>
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
                },
                {
                    path: '/addproduct',
                    element: <AddProduct></AddProduct>
                },
                {
                    path: '/myproducts',
                    element: <MyProducts></MyProducts>
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