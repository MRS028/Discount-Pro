import React from "react";
import { Link } from "react-router-dom";

const BrandsOnSell = ({ brands }) => {
  const brandsOnSell = brands.filter((brand) => brand.isSaleOn); 

  return (
    <div className="my-10 px-4 md:px-8 lg:px-8">
     
      <h2 className="text-3xl font-bold text-center mb-6  animate__animated animate__bounce animate__slower">Brands on Sell</h2>

  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {brandsOnSell.map((brand) => (
         <Link to={`/brandS/${brand._id}`}>
           <div
            key={brand._id}
            className="card bg-white border shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
          >
            
            <div className="flex justify-center items-center mb-4">
              <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
            </div>

      
            <div className="text-center">
              <h3 className="font-bold text-lg sm:text-xl">{brand.brand_name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                Category: <span className="font-medium">{brand.category}</span>
              </p>
              <p className="text-sm text-gray-700 mt-2">
                Total Coupons: <span className="font-bold">{brand.coupons.length}</span>
              </p>
            </div>
          </div>
         </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandsOnSell;
