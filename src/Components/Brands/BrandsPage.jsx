import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const BrandsPage = () => {

const brands =useLoaderData();
const isLoggedIn = true;

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  

  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-10 px-4 md:px-8 lg:px-16">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-6 animate__animated animate__bounce animate__slower">Brands</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Brands..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Brands List */}
      <div className="space-y-6">
        {filteredBrands.map((brand) => (
          <div
            key={brand._id}
            className="card bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center space-x-4">
              {/* Brand Logo */}
              <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="w-16 h-16 object-contain"
              />

              {/* Brand Details */}
              <div className="flex-1">
                {/* Rating and Brand Name */}
                
                <h2 className="text-xl font-bold">{brand.brand_name}</h2>
                <p className="text-gray-600 mt-2">{brand.description}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500 text-lg">&#9733;</span>
                  <span className="font-bold text-lg">{brand.rating}</span>
                </div>
                
              </div>
            </div>

            {/* Action Section */}
            <div className="mt-4 flex justify-between items-center">
              {/* Conditional Bouncing Text */}
              {brand.isSaleOn ? (
                <span className="text-xl font-semibold text-green-500 animate-bounce">
                  Sale is on!
                </span>
              ) : (<span className="text-xl font-semibold text-red-500 animate-bounce">
                Out of stock!
              </span>) }

              {/* View Coupons Button */}
              <button
                onClick={() =>
                  isLoggedIn
                    ? navigate(`/brands/${brand._id}`)
                    : ''
                }
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Coupons
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
