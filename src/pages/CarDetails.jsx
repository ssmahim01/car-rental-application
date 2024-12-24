import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CarDetails = () => {
  //   const { id } = useParams();
  const { user } = useAuth();
  const carData = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const { model, price, availability, features, image, description } =
    carData || {};

  //   console.log(id, carData);

  const handleBook = () => {
    setModalOpen(true);
    return document.getElementById("booking_modal").showModal();
  };

  const handleClose = () => {
    setModalOpen(false);
    return document.getElementById("booking_modal").close();
  };

  const handleBookNow = async () => {
    const bookingDate = startDate;
    const userInfo = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
    };

    const bookingData = {
      model,
      price,
      availability,
      bookingDate,
      features,
      image,
      description,
      userInfo,
    };

    const { data } = await axios.post(
      `${import.meta.env.VITE_UNIQUE_URL}/booked-cars`,
      bookingData
    );
    if (data.insertedId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully booked the car",
        showConfirmButton: false,
        timer: 2500,
      });

      return document.getElementById("booking_modal").close();
    }
  };

  return (
    <div className="mt-6 mb-12 md:w-4/5 w-11/12 mx-auto">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 bg-base-100 rounded-xl p-5 shadow-md">
        <div className="w-full lg:w-1/2 space-y-3">
          <h2 className="md:text-2xl text-xl text-gray-900 font-bold">
            Model: <span className="text-gray-700">{model}</span>
          </h2>

          <p className="text-gray-800 md:text-xl text-lg font-semibold">
            Price Per Day: <span className="text-gray-600">{price}</span>
          </p>

          <p className="text-gray-800 md:text-xl text-lg font-semibold">
            Availability:{" "}
            <span
              className={`badge text-white ${
                availability ? "badge-success" : "badge-error"
              }`}
            >
              {availability ? "Available" : "Not Available"}
            </span>
          </p>

          <p className="text-gray-800 font-medium">
            Features: <span className="text-gray-600">{features}</span>
          </p>

          <p className="text-gray-800 font-medium">
            Description: <span className="text-gray-500">{description}</span>
          </p>

          <button
            onClick={handleBook}
            className="mt-4 btn bg-primary hover:bg-fuchsia-500 rounded-full text-white text-lg font-bold px-8"
            disabled={!availability}
          >
            Book Now
          </button>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            className="w-full lg:h-[450px] md:h-[300px] rounded-xl"
            src={image}
            alt={model}
          />
        </div>
      </div>

      {modalOpen && (
        <dialog id="booking_modal" className="modal modal-middle">
          <div className="w-full flex justify-center items-center">
            <div className="modal-box">
              <h2 className="text-3xl font-bold text-center">Book Now</h2>
              <div className="divider w-4/5 mx-auto"></div>

              <figure className="w-full md:h-60 py-4">
                <img
                  className="w-full h-full rounded-lg"
                  src={image}
                  alt={model}
                />
              </figure>

              <div className="w-full space-y-3">
                <h2 className="md:text-2xl text-xl text-gray-900 font-bold">
                  Model: <span className="text-gray-700">{model}</span>
                </h2>

                <p className="text-gray-800 md:text-xl text-lg font-semibold">
                  Price Per Day: <span className="text-gray-600">{price}</span>
                </p>

                <p className="text-gray-800 md:text-xl text-lg font-semibold">
                  Availability:{" "}
                  <span
                    className={`badge text-white ${
                      availability ? "badge-success" : "badge-error"
                    }`}
                  >
                    {availability ? "Available" : "Not Available"}
                  </span>
                </p>

                <p className="text-gray-800 font-medium">
                  Features: <span className="text-gray-600">{features}</span>
                </p>

                <p className="text-gray-800 font-medium">
                  Description:{" "}
                  <span className="text-gray-500">{description}</span>
                </p>

                <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Booking Date</span>
              </label>
              <DatePicker className="input input-bordered w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>

                <div className="py-3 flex gap-4 justify-center items-center">
                  <button
                    onClick={handleBookNow}
                    className="md:px-14 px-10 btn bg-violet-500 hover:bg-fuchsia-500 rounded-full text-white text-lg font-bold"
                    disabled={!availability}
                  >
                    Book Car
                  </button>

                  <button
                    onClick={handleClose}
                    className="md:px-14 px-10 btn btn-error text-lg text-white font-bold rounded-full"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default CarDetails;
