import { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  const [error, setError] = useState("");

  return (
    <div className="pt-7 pb-14 flex flex-col justify-center items-center">
      <div className="text-center mb-6 space-y-2 lg:w-2/6 md:w-3/4 w-11/12">
        <h2 className="text-4xl font-bold">Register Here</h2>
        <p className="md:text-base text-sm text-gray-600 text-center font-medium">
          You can register with name, email, password and Photo URL. If you have an account, Go to Login page.
        </p>
      </div>

      <div className="border border-gray-200 card bg-base-100 lg:w-2/5 md:w-3/4 w-11/12 mx-auto shadow-md rounded-lg">
        {error && (
          <p className="mt-4 text-center text-rose-600 font-semibold">
            {error}
          </p>
        )}

        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Write your Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type your Email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Type your Password"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Provide your Photo URL"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-purple-600 text-lg text-white/90 hover:btn-primary hover:text-white font-bold">
              Register
            </button>
          </div>
        </form>

        <p className="text-center font-semibold pb-5">
          Already Have An Existing Account? {" "}
          <Link to="/log-in" className="text-cyan-600 font-bold underline">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
