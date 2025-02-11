import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLogOut = () => {
    logOutUser().then(() => {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Logged out successfully",
        showConfirmButton: false,
        timer: 2500,
      });

      navigate("/");
    });
  };

  const routes = (
    <div className="flex lg:flex-row flex-col lg:items-center gap-3">
      <NavLink to="/">Home</NavLink>
      <li className="lg:block hidden">|</li>
      <NavLink to="/available-cars">Available Cars</NavLink>
      <li className="lg:block hidden">|</li>
      {!user && <NavLink to="/log-in">
      <button className="btn btn-sm bg-indigo-500 text-white border-none rounded-md font-bold">
        Log In
      </button>
      </NavLink>}
      {user && (
        <>
          <NavLink to="/add-car">Add Car</NavLink>
          <li className="lg:block hidden">|</li>
          <NavLink to="/my-cars">My Cars</NavLink>
          <li className="lg:block hidden">|</li>
          <NavLink to="/my-bookings">My Bookings</NavLink>
          <li className="lg:block hidden">|</li>

          <div
            className="tooltip tooltip-bottom"
            data-tip={`${user?.displayName}`}
          >
            <img
              className="hidden lg:block w-11 h-11 rounded-full border-4 border-emerald-500 shadow-lg"
              src={user?.photoURL}
              alt={user?.displayName}
              referrerPolicy="no-referrer"
            />
          </div>

          <button onClick={handleLogOut} className="btn btn-sm btn-error text-white font-bold">
            Logout
          </button>
        </>
      )}
    </div>
  );
  return (
    <div className="navbar justify-between bg-neutral shadow-md fixed z-10 lg:px-14 px-6">
      <div className="navbar-start">
        <div className="flex gap-2 items-center">
          <img
            className="md:w-8 md:h-8 w-9 h-9 rounded-xl"
            src="car-rental-96.png"
            alt="Logo of Car rental"
          />
          <h2 className="md:text-2xl text-xl text-white font-bold">
            Car House
          </h2>
        </div>
      </div>
      <div className="dropdown" ref={dropdownRef}>
        <div
          tabIndex={0}
          role="button"
          onClick={() => setModalOpen(!modalOpen)}
          className="btn btn-ghost text-white border border-neutral-700 lg:hidden shadow-md"
        >
          {modalOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          )}
        </div>
        {modalOpen && (
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-lg z-[10] mt-3 md:w-96 w-72 p-4 right-2 shadow-md *:text-gray-700 *:font-bold"
          >
            <div
              className="tooltip tooltip-bottom"
              data-tip={`${user?.displayName}`}
            >
              {user && (
                <div className="mb-4">
                  <img
                  className="block mx-auto lg:hidden mb-2 md:w-20 md:h-20 w-14 h-14 rounded-full border-4 border-emerald-500 shadow-lg"
                  src={user?.photoURL}
                  referrerPolicy="no-referrer"
                  alt={user?.displayName}
                />

                <p className="md:text-lg text-gray-600 font-semibold">{user?.email}</p>
                </div>
              )}
            </div>
            {routes}
          </ul>
        )}
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 *:text-white *:font-bold">
          {routes}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
