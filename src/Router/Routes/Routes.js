import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Services from "../../Pages/AllServices/Services";
import DetailService from "../../Pages/DetailService/DetailService";
import Home from "../../Pages/Home/Home/Home";

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
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}}`)
            },
        ]

    }
])
export default router;