import React, { useState, useEffect, useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Layouts/Loading";
import { AuthContext } from "../../Provider/AuthProvider";

const CouponPage = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [brand, setBrand] = useState(null);

  const data = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    
    if (data) {
      setBrand(data);
      setLoading(false);
    } else {
      toast.error("Brand not found!");
      navigate("/brands"); 
    }
  }, [data, navigate, setLoading]);

  if (loading) return <Loading />;

  const handleCopy = (code) => {
    toast.success(`Coupon code "${code}" copied successfully!`);
  };

  return (
    <div className="container mx-auto my-10 px-4 md:px-8 lg:px-16">
      <ToastContainer />
      {brand ? (
        <>
          <div className="text-center mb-10">
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="mx-auto w-40 h-40 object-contain"
            />
            <h1 className="text-4xl font-bold mt-4">{brand.brand_name}</h1>
            <p className="text-lg text-yellow-500">&#9733; {brand.rating}</p>
            <p className="text-gray-600 mt-4">{brand.description}</p>
          </div>

          {/* Coupons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brand.coupons.map((coupon) => (
              <div
                key={coupon.coupon_code}
                className="card bg-white shadow-md rounded-lg p-6 border hover:shadow-lg transition duration-300"
              >
                <h2 className="text-xl font-bold mb-2">{coupon.description}</h2>
                <p className="text-gray-600 mb-2">{coupon.condition}</p>
                <p className="text-gray-500 mb-4">
                  Expiry: {coupon.expiry_date}
                </p>

                <div className="flex justify-between items-center">
                  <CopyToClipboard
                    text={coupon.coupon_code}
                    onCopy={() => handleCopy(coupon.coupon_code)}
                  >
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                      Copy Code
                    </button>
                  </CopyToClipboard>

                  <button
                    onClick={() => window.open(brand.shop_Link, "_blank")}
                    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    Use Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600">No Brand Found</p>
      )}
    </div>
  );
};

export default CouponPage;
