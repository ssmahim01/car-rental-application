import BookingsTableRow from "../components/bookingsTableRow";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyBookings = () => {
    const {user} = useAuth();
    const [bookings, setBookings] = useState([]);
    console.log(bookings);

    const getBookingsData = async() => {
        const {data} = await axios.get(`${import.meta.env.VITE_UNIQUE_URL}/my-bookings?email=${user?.email}`)
        setBookings(data);
    }

    useEffect(() => {
       getBookingsData();
    }, [user?.email]);

  return (
    <div className="mt-5 mb-12">
        <h2 className="md:text-4xl text-3xl text-center font-bold mb-6">My Bookings</h2>

      {bookings.length === 0 && (
        <div className="flex flex-col justify-center items-center gap-y-3">
          <p className="md:text-2xl text-xl text-rose-600 font-bold">
            You did not booked any cars
          </p>

          <Link to="/available-cars">
            <button className="btn btn-neutral text-white font-bold hover:bg-emerald-500 hover:text-white rounded-full text-lg px-8 border-none">
              Book Car
            </button>
          </Link>
        </div>
      )}

      {bookings.length !== 0 && (
        <div className="overflow-x-auto lg:px-12 px-6">
          <table className="table border border-gray-200 border-collapse">
            <thead>
              <tr className="bg-gray-100 *:text-gray-800 *:font-bold">
                <th>No.</th>
                <th>Car Image</th>
                <th>Car Model</th>
                <th>Booking Date</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <BookingsTableRow
                  key={booking?._id}
                  booking={booking}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
