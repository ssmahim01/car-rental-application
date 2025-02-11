import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { MdEventAvailable, MdReadMore } from "react-icons/md";

const FeaturedCars = () => {
  const [cars, setCars] = useState([]);
  //   console.log(cars);

  const fetchFeaturedCars = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_UNIQUE_URL}/featured-cars`
    );
    setCars(data);
  };

  useEffect(() => {
    fetchFeaturedCars();
  }, []);

  return (
    <div className="my-12 lg:px-14 px-6">
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-center text-gray-800 md:text-4xl text-3xl font-extrabold">
          Top Picks For You
        </h2>
        <p className="text-gray-600 w-11/12 mx-auto font-medium">
          Explore our top rental cars handpicked for you!
        </p>
      </div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        // navigation={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="w-full lg:h-[470px] md:h-80 h-72 rounded-md"
      >
        {cars.map((car) => (
          <SwiperSlide key={car?._id}>
            <div className="relative w-full h-full object-cover">
              <img
                src={car?.image}
                alt={car?.model}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4">
                <h3 className="text-white/80 md:text-4xl text-2xl font-bold mb-1">
                  {car?.model}
                </h3>
                <p className="text-white/80 font-medium md:block hidden lg:w-1/2 w-11/12">
                  {car?.description.slice(0, 150)}...
                </p>
                <p className="text-white/80 font-medium md:hidden block text-sm">
                  {car?.description.slice(0, 80)}...
                </p>

                <div className="flex gap-3 items-center mt-4">
                  <Link to={`/car-details/${car?._id}`}>
                    <button className="bg-indigo-500 bg-opacity-70 hover:bg-indigo-700 border-none text-white font-bold rounded-md lg:px-8 md:px-6 px-3 py-2 flex gap-2 justify-center items-center">
                      <span className="lg:text-lg">Explore Now</span>{" "}
                      <MdReadMore className="text-2xl" />
                    </button>
                  </Link>

                  <Link to="/available-cars">
                    <button className="bg-purple-500 bg-opacity-70 hover:bg-purple-700 border-none text-white font-bold rounded-md lg:px-8 md:px-6 px-3 py-2 flex gap-2 justify-center items-center">
                      <span className="lg:text-lg">All Cars</span>
                      <MdEventAvailable className="md:text-2xl text-xl" />{" "}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedCars;
