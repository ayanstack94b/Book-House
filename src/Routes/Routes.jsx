import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout.jsx";
import HomePage from "../Pages/HomePage/HomePage.jsx";
import Books from "../Pages/Books/Books.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>
            },
            {
                path: '/books',
                element: <Books></Books>
            },
            {
                path: '/books',
                element: <Books></Books>
            },
        ]
    },
]);