import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const handleOrder = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <div>
      {orderPopup && (
        <div className="popup">
          {/* blur the whole background */}
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white rounded-md duration-200 w-[300px] sm:w-[400px]">
              {/* header */}
              <div className="flex justify-between px-3 mb-4">
                <h1 className="font-bold text-xl">Order Now</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
              {/* form section */}
              <div className="flex flex-col gap-3 items-center dark:text-black">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-full focus:outline-none focus:border-primary
                dark:border-gray-500 px-3 py-2 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-full focus:outline-none focus:border-primary dark:focus:border-gray-500 px-3 py-2 transition-all duration-300"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full border border-gray-300 rounded-full focus:outline-none focus:border-primary dark:focus:border-gray-500 px-3 py-2 transition-all duration-300"
                />
                <button className="w-[100px] bg-gradient-to-r from-primary to-secondary text-white rounded-full py-2 transition-all duration-300 hover:scale-105">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
