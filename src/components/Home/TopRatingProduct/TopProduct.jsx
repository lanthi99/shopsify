import React from "react";
import img11 from "../../../assets/top-rating-product/img11.png";
import img14 from "../../../assets/top-rating-product/img14.png";
import img15 from "../../../assets/top-rating-product/img15.png";
import { FaStar } from "react-icons/fa";

const ProductData = [
  {
    id: 1,
    img: img11,
    title: "Ethereal Chic",
    description: "A beautiful blend of elegance and style",
  },

  {
    id: 3,
    img: img14,
    title: "Aqua Aura",
    description: "A stunning piece that's sure to turn heads",
  },
  {
    id: 4,
    img: img15,
    title: "Maven Muse",
    description: "A piece that's as unique as you are",
  },
];

const TopProduct = ({ handleOrder }) => {
  return (
    <div className="pb-12 dark:bg-gray-800 dark:text-white font-thin">
      <div className="container">
        {/* Header section */}
        <div className=" mb-20 max-w-[600px]">
          <p
            data-aos="fade-up"
            data-aos-once="true"
            className="text-sm text-secondary"
          >
            Top 5 Rated Products
          </p>
          <h1
            data-aos="fade-up"
            data-aos-once="true"
            className="font-bold text-3xl"
          >
            Best Products
          </h1>
          <p
            data-aos="fade-up"
            data-aos-once="true"
            className="text-gray-400 text-sx"
          >
            Explore our top-rated collection, where style meets quality in
            best-selling pieces loved by our customers
          </p>
        </div>
        {/* Body section */}
        <div
          data-aos="zoom-out"
          data-aos-once="true"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center"
        >
          {ProductData.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 shadow-xl cursor-pointer duration-300 group max-w-[300px]"
            >
              <div className="h-[100px]">
                {/* image section*/}
                <img
                  src={product.img}
                  alt={product.title}
                  className="max-w-[190px] block mx-auto transform -translate-y-20 transition-all duration-300 group-hover:scale-105 drop-shadow-md"
                />
              </div>
              {/* detail section */}
              <div className="flex flex-col gap-2 p-4 text-center ">
                <div className="flex gap-1 justify-center">
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                  <FaStar className="text-yellow-400"></FaStar>
                </div>
                <h1 className="font-bold text-xl">{product.title}</h1>
                <p className="text-sm text-gray-500">{product.description}</p>
                <button
                  className="bg-primary transition-all duration-200 py-1 px-4 rounded-full mx-auto hover:scale-105 group-hover:bg-white group-hover:text-secondary dark:group-hover:bg-secondary/20 dark:group-hover:text-white dark:bg-secondary/40 dark:border-none border border-secondary"
                  onClick={handleOrder}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
