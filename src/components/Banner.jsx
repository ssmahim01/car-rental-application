import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero lg:h-[60vh] md:h-[80vh] h-[70vh] mt-2 mb-8 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('car-rent.jpg')",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">

            {/* Motivational Heading */}
          <h1 className="mb-5 md:text-4xl text-3xl font-bold shadow-lg">Drive Your Dreams Today!</h1>

          {/* Call-to-Action Button */}
          <Link to="/available-cars"><button className="btn btn-info text-white text-lg px-6 font-bold transition-all hover:btn-primary hover:text-white rounded-full shadow-lg">View Available Cars</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;