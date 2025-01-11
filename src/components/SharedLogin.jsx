import { FcGoogle } from "react-icons/fc";

const SharedLogin = ({handleGoogleLogin}) => {
    return (
        <div className="w-11/12 mx-auto">
            <button onClick={handleGoogleLogin} className="btn btn-outline rounded-full border border-gray-300 shadow-md text-neutral text-lg w-full font-bold mb-5 hover:btn-neutral hover:border-none flex gap-3 items-center"><FcGoogle className="text-2xl" /> Log In with Google</button>
        </div>
    );
};

export default SharedLogin;