import React from "react";
import img2 from "../../../assets/banner/img2.png";

const BannerImg = {
  backgroundImage: `url(${img2})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      className=" bg-gray-100 dark:bg-gray-800 dark:text-white font-thin"
      style={BannerImg}
    >
      <div
        className="container backdrop-blur-sm py-10"
        data-aos="zoom-in"
        data-aos-once="true"
      >
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-4xl font-bold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            data-aos-once="true"
            type="email"
            placeholder="Enter your email"
            className="w-full h-[60px] transition-all duration-300 border p-3 focus:outline-none focus:border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
