import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";

const RootLayout = () => {
  const { loading } = useAuth();

  if (loading) return <Loading />;

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
