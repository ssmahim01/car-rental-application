import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Outlet */}
            <section className="pt-[70px] min-h-[calc(100vh-225px)]">
            <Outlet />
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default RootLayout;