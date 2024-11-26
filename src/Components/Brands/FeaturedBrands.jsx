import React from 'react';

const FeaturedBrands = ({ brands }) => {
    const featuredBrands = brands.filter((brand) => brand.rating > 4.3);
  
    return (
      <div className="my-10">
        <h2 className="text-3xl font-bold text-center mb-6 animate__animated animate__bounce animate__slower">Featured Brands</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {featuredBrands.map((brand) => (
            <div
              key={brand._id}
              className="flex items-center border shadow-md p-4 rounded-md hover:bg-blue-100 transition"
            >
              <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="w-16 h-16 object-contain mr-4"
              />
              <div>
                <h3 className="font-bold">{brand.brand_name}</h3>
                <p className="text-sm text-gray-500">
                  Rating: {brand.rating.toFixed(1)}⭐
                </p>
                <a
                  href={brand.shop_Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm mt-2 hover:underline block"
                >
                  Visit Shop
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeaturedBrands;