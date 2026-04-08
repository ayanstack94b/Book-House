import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout.jsx";
import HomePage from "../Pages/HomePage/HomePage.jsx";
import Books from "../Pages/Books/Books.jsx";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";
import BookDetails from "../Pages/BookDetails/BookDetails.jsx";

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
                path: '/bookDetails/:id',
                Component: BookDetails,
                loader: ()=>fetch('/data/booksData.json')
            },
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
]);