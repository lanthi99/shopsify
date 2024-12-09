import React, { useState } from "react";
import { MdFavoriteBorder } from "react-icons/md";

const DetailSection = ({ pd }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const [count, setCount] = useState(1);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count === 1) return; // prevent decrementing below 1
    setCount(count - 1);
  };

  return (
    <div className="mx-auto w-full">
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10 sm:ml-10">
          {/* image section */}
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-[200px] h-[300px] sm:w-[400px] sm:h-[500px]"
              src={pd.img}
              alt={pd.title}
            />
          </div>
          {/* details section */}
          <div className="flex flex-col gap-4 text-center items-center sm:items-start sm:px-4 ">
            <h1 className="sm:text-start text-xl sm:text-3xl font-bold">
              {pd.title}
            </h1>
            <div className="flex text-xs gap-1 items-center">
              <p className=" flex gap-1 text-yellow-400 sm:text-lg">
                {pd.star}
                {pd.star}
                {pd.star}
                {pd.star}
              </p>
              <p>{pd.reviews}</p>
            </div>
            <p className="sm:text-start text-sm sm:text-lg border-b-2 dark:border-b-gray-500 w-1/2 pb-3">
              ${pd.price}
            </p>
            {/* add available sizes buttons */}
            <p>Available sizes</p>
            <div className="flex justify-center gap-2">
              {["S", "M", "L"].map((size) => (
                <button
                  key={size}
                  className={`border border-gray-300 dark:border-gray-500 px-2 py-1 w-[30px] rounded-lg hover:scale-105 ${
                    selectedSize === size
                      ? "bg-secondary dark:bg-gray-500 text-white"
                      : "dark:text-gray-300"
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            {/* quantity section */}
            <p>Quantity</p>
            <div className="flex justify-center gap-3">
              <button
                className="border w-[23px] rounded-md"
                onClick={handleDecrement}
              >
                -
              </button>
              <button>{count}</button>
              <button
                className="border w-[23px] rounded-md"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
            {/* add to cart and favourite buton */}
            <div className="flex jusitfy-center w-1/2 gap-1">
              <button className="border transition-all duration-200 py-1 px-4 w-11/12 rounded-md hover:text-gray-600 dark:hover:text-gray-300">
                Add to Cart
              </button>
              <MdFavoriteBorder className="border transition-all duration-200 rounded-md w-1/12 h-8 p-1 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer" />
            </div>
            {/* order now button */}
            <button className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 w-1/2 py-1 px-4 rounded-md hover:text-gray-600 dark:hover:text-gray-300 dark:bg-gradient-to-r dark:from-primary/40 dark:to-secondary/40">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
