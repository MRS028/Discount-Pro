import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile, getAuth } from "firebase/auth";

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext); 
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!name || !photoURL) {
      toast.error("Both fields are required!");
      return;
    }

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      const auth = getAuth();
      const updatedUser = auth.currentUser;
      setUser(updatedUser);

      toast.success("Profile updated successfully!");
      setTimeout(() => navigate("/auth/my-profile"), 1500);
    } catch (error) {
      toast.error(error.message || "Failed to update profile!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleUpdate}
        className="bg-white shadow-md rounded-lg p-6 w-11/12 max-w-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Update Profile
        </h2>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="photoURL"
            className="block text-gray-700 font-medium mb-2"
          >
            Photo URL:
          </label>
          <input
            id="photoURL"
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            placeholder="Enter photo URL"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Update Information
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
