import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ImGithub, ImYoutube } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-lime-100 px-6 py-10">
      <div className="flex gap-x-2 justify-center items-center">
        <img
          className="w-10 h-10 rounded-xl"
          src="car-rental-96.png"
          alt="Logo of Car rental"
        />
        <h2 className="text-2xl text-gray-900 font-bold">Car Rental</h2>
      </div>

      <div className="divider py-4"></div>

      <div className="flex justify-between items-center px-4 pb-4">
          <p className="font-semibold">Copyright © {new Date().getFullYear()} - All right reserved by </p>
        <nav className="flex gap-3 items-center">
         <Link to="https://www.facebook.com/ssmahim" target="_blank"><FaFacebook className="text-blue-500 text-2xl" /></Link>

         <Link to="https://www.instagram.com/iammz01" target="_blank"><FaInstagram className="text-rose-500 text-2xl" /></Link>

         <Link to="https://github.com/ssmahim01" target="_blank"><ImGithub className="text-2xl" /></Link>

         <Link to="https://www.youtube.com/@MahimZayN" target="_blank"><ImYoutube className="text-rose-500 text-2xl" /></Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
