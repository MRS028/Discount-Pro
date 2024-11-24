import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from 'react-toastify';

const Register = () => {
  const { createNewUser, user,updateUserProfile, setUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(""); // To hold password validation error
  const navigate = useNavigate();

  const validatePassword = (password) => {
    // Regular expression for password validation
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLengthValid = password.length >= 6;

    if (!hasUppercase) {
      return "Password must have at least one uppercase letter";
    }
    if (!hasLowercase) {
      return "Password must have at least one lowercase letter";
    }
    if (!isLengthValid) {
      return "Password must be at least 6 characters long";
    }
    return ""; // Return empty if valid
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photourl = form.get("photourl");
    const password = form.get("password");
    const passwordValidationError = validatePassword(password);

    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
      return; // Don't proceed with the registration if password is invalid
    }

    setPasswordError(""); // Clear error if password is valid

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({
          displayName: name, photoURL : photourl,
        }).then(()=>{
          
          navigate('/');

        }).catch(err=>{
          console.log(err);
        });
        toast.success("Registration successful!");
         
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        navigate('/');
      })
      .catch(error => console.log('ERROR', error.message));
  };

  return (
    <div className="flex min-h-screen items-center justify-center  md:my-8">
      <div className="w-11/12 max-w-md bg-white rounded-lg shadow-md p-6 border">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

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
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Photo URL Field */}
          <div>
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              name="photourl"
              type="text"
              id="photo"
              placeholder="Enter photo URL"
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
                name="password"
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
            {passwordError && (
              <p className="text-xs text-red-500 mt-2">{passwordError}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 btn bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
          >
            Register
          </button>
        </form>

        {/* Social Login */}
        <div className="flex items-center justify-center space-x-2 mt-6">
          <span className="block w-20 border-t border-gray-300"></span>
          <span className="text-sm text-gray-500">Or Register with</span>
          <span className="block w-20 border-t border-gray-300"></span>
        </div>
        <button onClick={handleGoogleSignIn} className="flex items-center justify-center w-full py-2 mt-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700">
          <FaGoogle className="mr-2" /> Register with Google
        </button>

        {/* Redirect to Login */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
