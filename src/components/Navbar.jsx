import { Link } from "react-router-dom";

const Navbar = () => {
  const routes = (
    <div className="flex md:flex-row flex-col items-center">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="lg:block hidden">|</li>
      <li>
        <Link to="/available-cars">Available Cars</Link>
      </li>
      <li className="lg:block hidden">|</li>
      <li>
        <Link to="/log-in">Log-in</Link>
      </li>
      <li className="lg:block hidden">|</li>
      {/* {user && ( */}
      <>
        <li>
          <Link to="/add-car">Add Car</Link>
        </li>
        <li className="lg:block hidden">|</li>
        <li>
          <Link to="/my-cars">My Cars</Link>
        </li>
        <li className="lg:block hidden">|</li>
        <li>
          <Link to="/my-bookings">My Bookings</Link>
        </li>
        <li className="lg:block hidden">|</li>

        <li className="md:-ml-2"><button className="text-gray-700 font-bold ml-2">Logout</button></li>
      </>
      {/* )} */}
    </div>
  );
  return (
    <div className="navbar justify-center bg-base-100 shadow-md fixed lg:px-10 md:px-6">
      <div className="navbar-start">
        <div className="flex gap-2 items-center">
          <img
            className="w-10 h-10 md:w-8 md:h-8 rounded-xl"
            src="car-rental-96.png"
            alt="Logo of Car rental"
          />
          <h2 className="lg:text-2xl text-xl text-gray-800 font-bold">Car Rental</h2>
        </div>
      </div>
      <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden bg-accent text-white">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[5] mt-3 w-56 p-3 right-0 shadow-sm *:text-gray-700 *:font-bold"
          >
            {routes}
          </ul>
        </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal px-1 *:text-gray-700 *:font-bold">
          {routes}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
