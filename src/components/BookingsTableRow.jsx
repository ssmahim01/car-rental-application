import { format } from "date-fns";
import { FaCalendarAlt, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const BookingsTableRow = ({ booking, index, bookings, setBookings, handleModalOpen }) => {

  const handleCanceledBooking = (id) => {
      Swal.fire({
        title: "Are you sure you want to cancel this booking?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Yes",
        cancelButtonColor: "#d33",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`${import.meta.env.VITE_UNIQUE_URL}/cancel-status/${id}`, {
            method: "PATCH",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                Swal.fire({
                  title: "Canceled!",
                  position: "center",
                  text: "Your booking has been canceled.",
                  icon: "success",
                  timer: 2500,
                  showConfirmButton: false
                });
               
                const updateTable = bookings.map((book) =>
                  book?._id === id
                    ? { ...book, status: "Canceled" }
                    : book
                );

                setBookings(updateTable);
              }
            })
            .catch((error) => {
              // console.log(error.message);
              Swal.fire({
                position: "center",
                icon: "error",
                title: "Failed to Cancel the booking",
                showConfirmButton: false,
                timer: 2500,
              });
            });
        }
      });
    };

  return (
    <tr className="hover:bg-gray-100 transition-all *:text-gray-700 *:font-semibold">
      <th>{index + 1}</th>
      <td>
        <img
          className="w-14 h-12 rounded-lg object-cover"
          src={booking?.image}
          alt={booking?.model}
        />
      </td>
      <td>{booking?.model}</td>
      <td>
        {booking?.bookingDate
          ? format(
              typeof booking.bookingDate === "string"
                ? new Date(booking.bookingDate)
                : booking.bookingDate,
              "dd-MM-yyyy HH:mm"
            )
          : "N/A"}
      </td>
      <td>{booking?.price}</td>
      <td>
        <span
          className={`badge p-3 text-white ${
            booking?.status === "Pending"
              ? "badge-warning"
              : booking?.status === "Confirmed"
              ? "badge-success"
              : "badge-error"
          }`}
        >
          {booking?.status}
        </span>
      </td>
      <td className="flex gap-2 items-center w-72">
        <button onClick={() => handleCanceledBooking(booking?._id)} className="inline-flex items-center gap-1 bg-red-500 text-white rounded-none font-semibold py-2 px-4" disabled={booking?.status === "Canceled"}>
          <FaTrashAlt /> Cancel
        </button>
        <button onClick={() => handleModalOpen(booking)} className="inline-flex items-center gap-1 bg-blue-500 text-white rounded-none font-semibold py-2 px-4">
          <FaCalendarAlt /> Modify Date
        </button>
      </td>
    </tr>
  );
};

export default BookingsTableRow;
