import React from "react";
import { useNavigate } from "react-router-dom";

const Display = ({ products, message }) => {
  //Filter products based on the filters
  const navigate = useNavigate();

  return (
    <div className="text-center w-full mx-auto m-10 ">
      <div className="container">
        <h1 className="font-bold text-3xl mb-6 pb-6 border-b-2 dark:border-b-gray-500">
          Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5 ">
          {products.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center hover:scale-105 transition-all duration-300 shadow-md p-3 rounded-lg bg-gray-100/40 dark:bg-gray-600"
            >
              {/* image section */}
              <img
                data-aos="fade-up"
                data-aos-once="true"
                src={data.img}
                alt={data.title}
                className="w-[150px] h-[250px] object-cover rounded-lg cursor-pointer"
                onClick={() => navigate(`/products/${data.title}`)}
              />
              {/* details section */}
              <div className="" data-aos="fade-up" data-aos-once="true">
                <h1>{data.title}</h1>
                <div className="flex text-xs gap-1 items-center">
                  <p className=" flex gap-0 text-yellow-400">
                    {data.star}
                    {data.star}
                    {data.star}
                    {data.star}
                  </p>
                  <p>{data.reviews}</p>
                </div>
                <p className="text-sm">${data.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-lg sm:text-2xl font-semibold text-gray-600 dark:text-gray-400">
            {message}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Display;
