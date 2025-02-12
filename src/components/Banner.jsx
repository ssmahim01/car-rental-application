import { MdEventAvailable } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero lg:h-[450px] md:h-80 h-72 mt-0 mb-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('car-rent-bg.jpg')",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">

            {/* Motivational Heading */}
          <h1 className="mb-5 md:text-4xl text-3xl font-bold">Your Dream Car Awaits!</h1>

          {/* Call-to-Action Button */}
          <Link to="/available-cars"><button className="py-2 bg-purple-600 border-none text-white px-6 font-bold transition-all hover:bg-purple-700 hover:text-white rounded-md shadow-lg flex gap-2 mx-auto items-center"><MdEventAvailable className="text-2xl" /> <span className="text-lg">View Available Cars</span></button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;