import { useEffect } from "react";
import { MdEventAvailable } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    const handleScroll = () => {
      const banner = document.querySelector(".hero");
      if (banner) {
        const scrollPosition = window.scrollY;
        banner.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="hero lg:h-[550px] md:h-[500px] h-[400px] mt-0 mb-16 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: "url('car-rent-bg.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 to-neutral-900/80"></div>

      {/* Hero Content */}
      <div className="hero-content text-neutral-content text-center relative flex items-center justify-center h-full">
        <div className="max-w-3xl px-6 animate-fadeIn">
          {/* Motivational Heading */}
          <h1 className="mb-5 lg:text-6xl md:text-4xl text-3xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
            Your Dream Car Awaits!
          </h1>
          {/* Description */}
          <p className="lg:mb-8 mb-6 lg:text-lg md:text-base text-sm text-neutral-100 max-w-2xl mx-auto leading-relaxed">
            Discover a wide range of premium vehicles for rent, tailored to make
            your journey unforgettable. Book now and hit the road with style!
          </p>
          {/* Call-to-Action Button */}
          <Link to="/available-cars">
            <button className="py-2 px-10 bg-purple-600 text-white font-semibold text-lg rounded-lg shadow-lg flex gap-3 mx-auto items-center transition-transform hover:scale-105 hover:bg-purple-700 hover:shadow-xl duration-300">
              <MdEventAvailable className="text-2xl" />
              <span>View Available Cars</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Custom CSS for Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Banner;
