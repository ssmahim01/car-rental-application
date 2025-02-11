import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

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
    <div className="my-12 md:px-12 px-4">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-center text-gray-800 md:text-4xl text-3xl font-extrabold">
          Top Picks For You
        </h2>
        <p className="text-gray-600 font-medium">
          Explore our top rental cars handpicked for you!
        </p>
      </div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        // navigation={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="w-full lg:h-[470px] md:h-96 h-80"
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
                <h3 className="text-white/80 md:text-4xl text-2xl font-bold mb-2">
                  {car?.model}
                </h3>
                <p className="text-white/80 font-medium w-1/2">
                  {car?.description.slice(0, 150)}...
                </p>

                <Link to="/available-cars">
                <button className="bg-purple-500 bg-opacity-70 hover:bg-purple-700 border-none text-white text-lg font-bold rounded-md px-8 py-2 mt-4">See All Cars</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedCars;
