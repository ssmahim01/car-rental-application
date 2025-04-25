import { BiEditAlt, BiTrashAlt } from "react-icons/bi";

const TableRow = ({ car, index, handleUpdateCar, handleDelete }) => {
  return (
    <tr className="hover *:text-gray-700 *:font-semibold">
      <th>{index + 1}</th>
      <td>
        <img
          className="w-14 h-10 rounded-lg object-cover"
          src={car?.image}
          alt={car?.model}
        />
      </td>
      <td>{car?.model}</td>
      <td>${car?.price}</td>
      <td>{car?.bookingCount}</td>
      <td><span className={`badge text-white p-3 mb-1 ${
          car?.availability ? "bg-purple-600 border-none" : "badge-error"
        }`}>{car?.availability ? "Available" : "Not Available"}</span></td>
      <td>{new Date(car?.dateAdded).toLocaleDateString()}</td>
      <td className="flex gap-2 items-center">
        <button
          onClick={() => handleUpdateCar(car)}
          className="bg-indigo-500 text-white rounded-xl font-semibold py-2 px-4 flex gap-2 items-center"
        >
          <BiEditAlt className="text-lg" />
          <span>Update</span>
        </button>

        <button
          onClick={() => handleDelete(car?._id)}
          className="bg-rose-500 text-white rounded-xl font-semibold py-2 px-4 flex gap-2 items-center"
        >
          <BiTrashAlt className="text-lg" />
          <span>Delete</span>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
