import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Services from "../../Pages/AllServices/Services";
import DetailService from "../../Pages/DetailService/DetailService";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Signup/Register"
import EditReview from "../../Pages/MyReviews/EditReview";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ReviewSection from "../../Pages/ReviewSection/ReviewSection";
import Blog from "../../Pages/Shared/Blog/Blog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Spinner from "../PrivateRoute/Spinner";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Spinner><Services></Services></Spinner>,
                loader: () => fetch('https://secure-web-server.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <DetailService></DetailService>,
                loader: ({ params }) => fetch(`https://secure-web-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Spinner><Login></Login></Spinner>,
            },
            {
                path: '/register',
                element: <Spinner><Register></Register></Spinner>,
            },
            {
                path: '/addService',
                element: <PrivateRoute> <AddService></AddService> </PrivateRoute>
            },
            {
                path: '/reviews',
                element: <PrivateRoute> <MyReviews></MyReviews> </PrivateRoute>,
                // loader: () => fetch('https://secure-web-server.vercel.app/reviews')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/reviews/services/:id',
                element: <ReviewSection></ReviewSection>,

            },
            {
                path: '/reviews/edit/:id',
                element: <EditReview></EditReview>,
            },
        ]

    }
])
export default router;