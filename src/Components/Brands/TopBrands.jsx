import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TopBrands = ({ brand }) => {
  // console.log("Brands Data in TopBrands:", brand);

  return (
    <div>
      <div className="my-5 W-[90%]">
        <h2 className="text-3xl font-bold text-center mb-6 animate__animated animate__bounce animate__slower">Top Brands</h2>

        <Marquee pauseOnHover={true} speed={60} gradient={false}>
          {brand.map((item) => (
            <div className="flex gap-2">
              <Link
                key={item._id}
                to={`/brandS/${item._id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="m-4 hover:scale-105 shadow transition-transform duration-300"
                title={item.brand_name}
              >
                <img
                  src={item.brand_logo}
                  alt={item.brand_name}
                  className="w-36 h-20 p-2 object-contain rounded-lg shadow-lg"
                />
              </Link>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrands;
