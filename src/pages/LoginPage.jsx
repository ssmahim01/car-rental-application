import { useState } from "react";
import SharedLogin from "../components/SharedLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [error, setError] = useState("");

  return (
    <div className="pt-7 pb-14 flex flex-col justify-center items-center">
      <div className="text-center mb-6 space-y-2 lg:w-2/6 md:w-3/4 w-11/12">
        <h2 className="text-4xl font-bold">Log-in Here</h2>
        <p className="md:text-base text-sm text-gray-600 text-center font-medium">
          You can login with email/password or Google. If you are a new user,
          first you have to register your account.
        </p>
      </div>

      <div className="border border-gray-200 card bg-base-100 lg:w-2/5 md:w-3/4 w-11/12 mx-auto shadow-md rounded-lg">

        {error && (
          <p className="mt-4 text-center text-rose-600 font-semibold">{error}</p>
        )}

        <form className="card-body">
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

          <div className="form-control mt-6">
            <button className="btn btn-info text-lg text-white/90 hover:btn-success hover:text-white font-bold">Log In</button>
          </div>
        </form>

        <div className="divider">Or</div>

        <SharedLogin />

        <p className="text-center font-semibold pb-5">New user on this site? Please <Link to="/registration" className="text-purple-600 underline font-bold">Register Here</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
