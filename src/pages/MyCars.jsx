import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const MyCars = () => {
    const {user} = useAuth();
  const [cars, setCars] = useState([]);
  const [sorted, setSorted] = useState("");
//   console.log(sorted);
//   console.log(cars);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_UNIQUE_URL}/my-cars?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setCars(data))
  }, [user?.email]);
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_UNIQUE_URL}/my-cars?sortType=${sorted}`)
    .then(res => res.json())
    .then(data => setCars(data))
  }, [sorted]);

  return (
    <div className="mt-5 mb-12">
      <div className="lg:px-12 px-8 flex justify-between items-center mb-5">
        <h2 className="md:text-3xl text-2xl font-bold">My Cars</h2>

        {cars.length !== 0 && (
          <select 
          className="select select-success *:font-bold"
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
            <option value="Price: Lowest First">Price: Lowest First</option>
            <option value="Price: Highest First">Price: Highest First</option>
          </select>
        )}
      </div>

      {cars.length === 0 && (
        <div className="flex flex-col justify-center items-center gap-y-3">
          <p className="md:text-2xl text-xl text-rose-600 font-semibold">
            You did not added any cars
          </p>

          <Link to="/add-car">
            <button className="btn btn-success text-white font-bold hover:bg-emerald-500 hover:text-white rounded-full text-lg px-8">
              Add a Car
            </button>
          </Link>
        </div>
      )}

      {cars.length !== 0 && (
        <div className="overflow-x-auto lg:px-12 px-6">
          <table className="table">
            <thead>
              <tr className="bg-secondary *:text-white *:font-bold">
                <th>No.</th>
                <th>Car Image</th>
                <th>Car Model</th>
                <th>Daily Rental Price</th>
                <th>Availability</th>
                <th>Date Added</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {cars.map((car, index) => (
                <tr key={car._id} className="hover *:text-gray-700 *:font-semibold">
                <th>{index + 1}</th>
                <td>
                    <img className="w-16 h-16 rounded-xl object-cover" src={car?.image} alt={car?.model} />
                </td>
                <td>{car?.model}</td>
                <td>{car?.price}</td>
                <td>{car?.availability ? "Available" : "Unavailable"}</td>
                <td>{car?.dateAdded}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyCars;
