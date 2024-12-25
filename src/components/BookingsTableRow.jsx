import { format } from "date-fns";
import { FaCalendarAlt, FaTrashAlt } from "react-icons/fa";

const BookingsTableRow = ({ booking, index }) => {
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
        <button className="inline-flex items-center gap-1 bg-red-500 text-white rounded-none font-semibold py-2 px-4">
          <FaTrashAlt /> Cancel
        </button>
        <button className="inline-flex items-center gap-1 bg-blue-500 text-white rounded-none font-semibold py-2 px-4">
          <FaCalendarAlt /> Modify Date
        </button>
      </td>
    </tr>
  );
};

export default BookingsTableRow;
