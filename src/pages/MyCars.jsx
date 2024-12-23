import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import UpdateModal from "../components/UpdateModal";
import Swal from "sweetalert2";

const MyCars = () => {
  const { user } = useAuth();
  const [cars, setCars] = useState([]);
  const [sorted, setSorted] = useState("");
  const [selectedCar, setSelectedCar] = useState(null);
  // //   console.log(sorted);
  // //   console.log(cars);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_UNIQUE_URL}/my-cars?email=${
        user?.email
      }&sortType=${sorted}`
    )
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [user?.email, sorted]);

  const handleUpdateCar = (car) => {
    setSelectedCar(car);
    document.getElementById("update_modal").showModal();
  };

  const handleDelete = (id) => {
    // console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_UNIQUE_URL}/delete-car/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your car has been deleted.",
                icon: "success",
              });
              const remainingCars = cars.filter((car) => car._id !== id);
              setCars(remainingCars);
            }
          })
          .catch((error) => {
            // console.log(error.message);
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Failed to delete",
              showConfirmButton: false,
              timer: 2500,
            });
          });
      }
    });
  };

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_UNIQUE_URL}/my-cars?sortType=${sorted}`)
  //     .then((res) => res.json())
  //     .then((data) => setCars(data));
  // }, [sorted]);

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
                <tr
                  key={car._id}
                  className="hover *:text-gray-700 *:font-semibold"
                >
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-14 h-10 rounded-lg object-cover"
                      src={car?.image}
                      alt={car?.model}
                    />
                  </td>
                  <td>{car?.model}</td>
                  <td>{car?.price}</td>
                  <td>{car?.availability ? "Available" : "Unavailable"}</td>
                  <td>{car?.dateAdded}</td>
                  <td className="flex gap-2 items-center">
                    <button
                      onClick={() => handleUpdateCar(car)}
                      className="bg-cyan-500 text-white rounded-xl font-semibold py-2 px-4"
                    >
                      Update
                    </button>

                    <button
                      onClick={() => handleDelete(car?._id)}
                      className="bg-rose-500 text-white rounded-xl font-semibold py-2 px-4"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <dialog id="update_modal" className="modal modal-middle">
        {selectedCar && <UpdateModal car={selectedCar} cars={cars} setCars={setCars} />}
      </dialog>
    </div>
  );
};

export default MyCars;
