import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RootLayout from "../layouts/RootLayout";
import Error from "../ErrorPage/Error";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";

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