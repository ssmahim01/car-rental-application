import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ImGithub, ImYoutube } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white/90 px-6 py-12 border-t border-neutral-700 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:flex-row md:justify-between border-b border-neutral-600 pb-8 mb-8">
          <Link to="/">
          <div className="flex items-center gap-x-3">
            <img
              className="w-12 h-12 rounded-xl"
              src="car-rental-96.png"
              alt="Logo of Car House"
            />
            <h2 className="text-3xl font-bold tracking-tight">Car House</h2>
          </div>
          </Link>
          <p className="mt-4 md:mt-0 text-center md:text-left text-sm text-neutral-400 max-w-md">
            Car House Ltd. offers premium car rental services, ensuring a seamless and comfortable experience for all your travel needs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col md:flex-row gap-4 text-sm text-neutral-300">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/available-cars" className="hover:text-white transition-colors">Browse Cars</Link>
              <Link to="/my-cars" className="hover:text-white transition-colors">Own Cars</Link>
              <Link to="/my-bookings" className="hover:text-white transition-colors">Bookings</Link>
            </nav>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-lg font-semibold">Follow Me</h3>
            <nav className="flex gap-4">
              <Link to="https://www.facebook.com/ssmahim" target="_blank" className="group">
                <FaFacebook className="text-2xl text-blue-500 group-hover:scale-110 transition-transform duration-200" />
              </Link>
              <Link to="https://www.instagram.com/iammz01" target="_blank" className="group">
                <FaInstagram className="text-2xl text-rose-500 group-hover:scale-110 transition-transform duration-200" />
              </Link>
              <Link to="https://github.com/ssmahim01" target="_blank" className="group">
                <ImGithub className="text-2xl text-neutral-300 group-hover:scale-110 transition-transform duration-200" />
              </Link>
              <Link to="https://www.youtube.com/@MahimZayN" target="_blank" className="group">
                <ImYoutube className="text-2xl text-rose-500 group-hover:scale-110 transition-transform duration-200" />
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-600 text-center text-sm text-neutral-400">
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
            <span className="font-semibold text-white">Car House Ltd.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;