import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { IoLocationSharp } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [viewType, setViewType] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [sorted, setSorted] = useState("");

  // Fetch available cars
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_UNIQUE_URL
      }/available-cars?sortType=${sorted}&search=${searchTerm}`
    )
      .then((res) => res.json())
      .then((data) => {
        const filter = data.filter((singleData) => singleData.availability);
        setCars(filter);
      });
  }, [sorted, searchTerm]);

  return (
    <div className="mt-9 pb-14">
      <div className="flex flex-wrap md:flex-row flex-col md:justify-between justify-center items-center lg:px-12 px-8 mb-5">
        <h2 className="text-3xl font-bold md:mb-0 mb-4">Available Cars</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by Location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered input-info w-full lg:max-w-sm max-w-xs"
        />
      </div>

      {/* Sorting and View Options */}
      <div className="flex flex-wrap md:flex-row flex-col md:justify-between justify-center items-center lg:px-12 px-8 my-8">
        <select
          className="select select-primary *:font-bold md:mb-0 mb-4"
          value={sorted}
          onChange={(e) => setSorted(e.target.value)}
        >
          <option defaultValue="Sort Cars By">Sort Cars By</option>
          <option value="Date Added: Newest First">
            Date Added: Newest First
          </option>
          <option value="Date Added: Oldest First">
            Date Added: Oldest First
          </option>
        </select>

        {/* Toggle View Button */}
        <button
          onClick={() =>
            setViewType((prev) => (prev === "grid" ? "list" : "grid"))
          }
          className={`btn px-8 text-white text-lg rounded-full font-bold ${
            viewType === "grid" ? "bg-gray-600" : "bg-indigo-500"
          }`}
        >
          {viewType === "grid" ? "List View" : "Grid View"}
        </button>
      </div>

      {/* Display Cars */}
      {cars.length === 0 ? (
        <div className="text-center">
          <p className="text-2xl text-red-500 font-bold">No cars available</p>
        </div>
      ) : (
        <div
          className={`${
            viewType === "grid"
              ? "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 lg:px-12 px-8"
              : "space-y-6 lg:px-12 px-8"
          }`}
        >
          {cars.map((car) => (
            <div
              key={car._id}
              className={`${
                viewType === "grid"
                  ? "card bg-slate-50 shadow-md border border-gray-300 p-4 rounded-xl"
                  : "border border-gray-200 flex md:flex-row flex-col-reverse justify-between md:items-center items-start bg-purple-50 shadow-md p-4 rounded-xl"
              }`}
            >
              {/* Car Image */}
              <img
                src={car?.image}
                alt={car?.model}
                className={`${
                  viewType === "grid"
                    ? "w-full relative h-48 object-cover rounded-lg mb-4"
                    : "md:mt-0 mt-5 lg:w-1/4 md:w-2/5 md:h-56 w-full object-cover rounded-lg"
                }`}
              />

              <p className={`text-lg font-bold ${viewType === "grid" ? "block absolute top-5 left-6" : "hidden"}`}>
                <span
                  className={`badge text-white ${
                    car?.availability ? "badge-success" : "badge-error"
                  }`}
                >
                  {car?.availability ? "Available" : "Not Available"}
                </span>
              </p>
              {/* Car Details */}
              <div
                className={`${
                  viewType === "grid"
                    ? "flex-1 space-y-2"
                    : "lg:w-1/5 md:w-2/6 w-full space-y-2 md:mr-4"
                }`}
              >
                <h2 className="text-2xl text-gray-900 font-bold">
                  <span className="text-gray-800">{car?.model}</span>
                </h2>

                <div
                  className={`${
                    viewType === "grid"
                      ? "hidden"
                      : "flex justify-between items-center"
                  }`}
                >
                  <p className="text-lg font-bold">
                    <span className="text-gray-600">${car?.price}/day</span>
                  </p>

                  <p className="text-lg font-bold">
                    <span
                      className={`badge text-white ${
                        car?.availability ? "badge-success" : "badge-error"
                      }`}
                    >
                      {car?.availability ? "Available" : "Not Available"}
                    </span>
                  </p>
                </div>

                <div
                  className={`${
                    viewType === "grid"
                      ? "flex justify-between items-center"
                      : "space-y-1"
                  }`}
                >
                  <p
                    className={`text-lg font-bold ${
                      viewType === "grid" ? "block" : "hidden"
                    }`}
                  >
                    <span className="text-gray-600">${car?.price}/day</span>
                  </p>

                  <p className="text-lg font-bold flex gap-1 items-center">
                    <IoLocationSharp className="text-lg" />{" "}
                    <span className="text-gray-600">{car?.location}</span>
                  </p>
                </div>

                <p className="flex gap-2 items-center text-lg text-gray-800 font-bold">
                  <FaCalendar className="text-lg" />
                  <span className="text-gray-600">
                    Added{" "}
                    {formatDistanceToNow(new Date(car?.dateAdded), {
                      addSuffix: true,
                    })}
                  </span>
                </p>
                {/* Book Now Button */}
                <Link to={`/car-details/${car?._id}`}>
                  <button
                    className={`btn mt-4 w-full text-white font-bold text-lg border-none ${
                      viewType === "grid"
                        ? "btn-neutral rounded-md"
                        : "bg-indigo-600 rounded"
                    }`}
                  >
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvailableCars;
