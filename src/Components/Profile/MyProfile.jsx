import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  
  useEffect(() => {
    document.title = "My Profile | Discount Pro";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">

      <div className="w-full  flex items-center justify-center">
        <h1 className="text-4xl font-extrabold ">Welcome, {user?.displayName || "User"}!</h1>
      </div>

     
      <div className="mt-10 bg-white shadow-2xl rounded-lg p-8 w-full max-w-xl border border-gray-200">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-32 h-32 border-4 border-white rounded-full overflow-hidden shadow-lg">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">{user?.displayName || "Your Name"}</h2>
          <p className="text-xl font-bold text-gray-500">{user?.email}</p>
        </div>

       
        <div className="mt-8">
          <Link
            to="/auth/my-profile/update-profile"
            
          ><button className="block w-full text-center btn btn-neutral font-bold   py-3 rounded-md hover:bg-blue-500 transition-all duration-300 transform hover:scale-105">
            Update Your Profile

          </button>
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
