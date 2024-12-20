import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Navbar';
import Listitem from './Listitem';
import Collection from './Collection';
import About from './About';
import Footer from './Footer';
import './index.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />, 
        children: [
            {
                path: "/collection",
                element: <Collection />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/offer",
                element: <Footer />,
            },
        ],
    },
    {
        path: "/arrivals", 
        element: <Listitem />, 
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
