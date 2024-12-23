import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RootLayout from "../layouts/RootLayout";
import Error from "../ErrorPage/Error";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import AddCar from "../pages/AddCar";
import PrivateRoute from "./PrivateRoute";
import MyCars from "../pages/MyCars";
import AvailableCars from "../pages/AvailableCars";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/available-cars",
                element: <AvailableCars />
            },
            {
                path: "/add-car",
                element: <PrivateRoute><AddCar /></PrivateRoute>
            },
            {
                path: "/my-cars",
                element: <PrivateRoute><MyCars /></PrivateRoute>
            },
            {
                path: "/log-in",
                element: <LoginPage />
            },
            {
                path: "/registration",
                element: <RegistrationPage />
            }
        ]
    }
]);

export default router;