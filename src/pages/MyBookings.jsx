import BookingsTableRow from "../components/bookingsTableRow";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { differenceInDays } from "date-fns";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyBookings = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState({});
  // console.log(bookings);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  
  const handleTotalPrice = (booking) => {
    const bookingPeriod = differenceInDays(new Date(booking?.bookingEndDate), new Date(booking?.bookingStartDate));
    // console.log(bookingPeriod);

    const pricePerDay = booking?.price;
    const totalPrice = pricePerDay * bookingPeriod;
    return totalPrice;
  };

  const handleModalOpen = (booking) => {
    setSelectedBooking(booking);

    document.getElementById("modify_date").showModal();
  };

  const handleModify = (id) => {
    const modifyDates = {
      bookingStartDate: startDate,
      bookingEndDate: endDate,
    };

    fetch(`${import.meta.env.VITE_UNIQUE_URL}/modify-dates/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(modifyDates),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Modified!",
            position: "center",
            text: "Your dates has been modified.",
            icon: "success",
            timer: 2500,
            showConfirmButton: false,
          });

          
          const updateTable = bookings.map((book) =>
            book?._id === id ? { ...book, ...modifyDates } : book
        );
        
        setBookings(updateTable);
        document.getElementById("modify_date").close();
        }
      })
      .catch((error) => {
        // console.log(error.message);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed to Modify the booking dates",
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };

  const getBookingsData = async () => {
    const { data } = await axiosSecure.get(
      `/my-bookings?email=${user?.email}`, {withCredentials: true}
    );
    setBookings(data);
  };

  useEffect(() => {
    getBookingsData();
    setStartDate(selectedBooking?.bookingStartDate);
    setEndDate(selectedBooking?.bookingEndDate);
  }, [user?.email, selectedBooking]);

  return (
    <div className="mt-5 mb-12">
      <h2 className="md:text-4xl text-3xl text-center font-bold mb-6">
        My Bookings
      </h2>

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
                  bookings={bookings}
                  setBookings={setBookings}
                  booking={booking}
                  index={index}
                  handleTotalPrice={handleTotalPrice}
                  handleModalOpen={handleModalOpen}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      <dialog id="modify_date" className="modal modal-middle">
        {selectedBooking && (
          <div className="w-full flex justify-center items-center">
            <div className="modal-box">
              <h2 className="text-3xl font-bold text-center">Modify Date</h2>
              <div className="divider w-4/5 mx-auto"></div>

              <figure className="w-full md:h-60 py-4">
                <img
                  className="w-full h-full rounded-lg"
                  src={selectedBooking?.image}
                  alt={selectedBooking?.model}
                />
              </figure>

              <div className="w-full space-y-3">
                <h2 className="md:text-2xl text-xl text-gray-900 font-bold">
                  Model:{" "}
                  <span className="text-gray-700">
                    {selectedBooking?.model}
                  </span>
                </h2>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Start Date</span>
                  </label>
                  <DatePicker
                    className="input input-bordered w-full"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">End Date</span>
                  </label>
                  <DatePicker
                    className="input input-bordered w-full"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                  />
                </div>

                <div className="py-3 flex gap-4 justify-center items-center">
                  <button
                    onClick={() => handleModify(selectedBooking._id)}
                    className="md:px-14 px-10 btn bg-violet-500 hover:bg-fuchsia-500 rounded-full text-white text-lg font-bold"
                  >
                    Confirm
                  </button>

                  <button
                    onClick={() =>
                      document.getElementById("modify_date").close()
                    }
                    className="md:px-14 px-10 btn btn-error text-lg text-white font-bold rounded-full"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
};

export default MyBookings;