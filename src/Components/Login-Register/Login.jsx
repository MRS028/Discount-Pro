import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from 'react-toastify'; // Importing toastify

const Login = () => {
  useEffect(() => {
    document.title = "Login| Discount Pro";
  }, []);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful!"); // Success toast
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        // Handle wrong email or password error
        setError({ login: "Wrong email or password" });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  return (
    <div className="flex min-h-screen items-center justify-center md:py-8 ">
      <div className="w-11/12 max-w-md bg-white rounded-lg shadow-md p-6 border">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
            {error.login && (
              <p className="text-red-500 text-sm">{error.login}</p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/auth/forgetpassword"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Social Login */}
        <div className="flex items-center justify-center space-x-2 mt-6">
          <span className="block w-20 border-t border-gray-300"></span>
          <span className="text-sm text-gray-500">Or Login with</span>
          <span className="block w-20 border-t border-gray-300"></span>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full py-2 mt-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700"
        >
          <FaGoogle className="mr-2" /> Login with Google
        </button>

        {/* Redirect to Register */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
