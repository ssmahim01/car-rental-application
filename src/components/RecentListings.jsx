import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RecentListings = () => {
  const [recentCars, setRecentCars] = useState([]);
  // console.log(recentCars);

  const fetchRecentListings = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_UNIQUE_URL}/recent-listings`
    );
    setRecentCars(data);
  };

  useEffect(() => {
    fetchRecentListings();
  }, []);

  return (
    <div className="my-12 lg:px-14 px-6">
      <h2 className="text-center text-gray-800 md:text-4xl text-3xl font-extrabold mb-8">
        Recent Listings
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {recentCars.map((car) => (
          <div
            key={car._id}
            className="card bg-base-100 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            <img
              className="relative w-full h-52 object-cover rounded-t-xl"
              src={car?.image}
              alt={car?.model}
            />

            <p className="absolute right-2 top-1 text-lg font-bold">
              <span
                className={`badge text-white ${
                  car?.availability ? "badge-success" : "badge-error"
                }`}
              >
                {car?.availability ? "Available" : "Not Available"}
              </span>
            </p>

            <div className="p-4 space-y-2">
              <h2 className="text-2xl font-bold">
                <span className="text-gray-800">{car?.model}</span>
              </h2>

              <p className="text-gray-600 font-medium">
                {car?.description.slice(0, 80)}...
              </p>

              <div className="pt-2 flex justify-between items-center">
                <p className="text-lg font-bold">
                  <span className="text-gray-600">${car?.price}/day</span>
                </p>

                <Link to={`/car-details/${car._id}`}>
                  <button className="flex gap-2 items-center btn bg-indigo-500 text-white border-none rounded-md px-8 text-lg font-bold">
                    See More <FaArrowUpRightFromSquare className="text-lg" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentListings;
