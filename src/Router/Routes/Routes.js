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
                element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services/:id',
                element: <DetailService></DetailService>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addService',
                element: <PrivateRoute> <AddService></AddService> </PrivateRoute>
            },
            {
                path: '/myReviews',
                element: <PrivateRoute> <MyReviews></MyReviews> </PrivateRoute>,
                loader: () => fetch('http://localhost:5000/reviews')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/reviews/:id',
                element: <ReviewSection></ReviewSection>,
                loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
            },
            {
                path: '/reviews/edit/:id',
                element: <EditReview></EditReview>,
            },
        ]

    }
])
export default router;