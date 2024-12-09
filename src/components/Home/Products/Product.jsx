import React from "react";

import img1 from "../../../assets/top-selling-product/img1.png";
import img2 from "../../../assets/top-selling-product/img2.png";
import img3 from "../../../assets/top-selling-product/img3.png";
import img4 from "../../../assets/top-selling-product/img4.png";
import img5 from "../../../assets/top-selling-product/img5.png";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductData = [
  {
    id: 1,
    img: img1,
    title: "Luna Grace",
    price: "$49.99",
    color: "Beige",
    rating: "5",
    aosDelay: "0",
  },
  {
    id: 2,
    img: img2,
    title: "Chic Haven",
    price: "$39.99",
    color: "Black",
    rating: "4.8",
    aosDelay: "200",
  },
  {
    id: 3,
    img: img3,
    title: "Midnight Bloom",
    price: "$62.99",
    color: "Pink",
    rating: "4.7",
    aosDelay: "400",
  },
  {
    id: 4,
    img: img4,
    title: "Ivory Ember",
    price: "$34.99",
    color: "Beige",
    rating: "4.5",
    aosDelay: "600",
  },
  {
    id: 5,
    img: img5,
    title: "Loom Lineage",
    price: "$49.99",
    color: "Beige",
    rating: "4.3",
    aosDelay: "800",
  },
];

const Product = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-14 pb-12 dark:bg-gray-800 dark:text-white duration-200 font-thin">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p
            data-aos="fade-up"
            data-aos-once="true"
            className="text-sm text-secondary"
          >
            Top 5 Selling Products
          </p>
          <h1
            data-aos="fade-up"
            data-aos-once="true"
            className="text-3xl font-bold"
          >
            Product
          </h1>
          <p
            data-aos="fade-up"
            data-aos-once="true"
            className="text-sx text-gray-400"
          >
            Discover our top-selling styles, loved by customers for their
            quality, comfort, and trend-setting designs!
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {ProductData.map((product) => (
              <div
                data-aos="fade-up"
                data-aos-delay={product.aosDelay}
                data-aos-once="true"
                key={product.id}
                className="flex flex-col items-center justify-center space-y-3 hover:shadow-lg cursor-pointer hover:scale-105 transition-all duration-300 "
                onClick={() => navigate(`/products/${product.title}`)}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-[150px] h-[250px] object-cover rounded-lg hover:scale-105 transition-all duration-300"
                />
                <div className="text-sm">
                  <h3 className="font-semibold text-base">{product.title}</h3>
                  <p>{product.color}</p>
                  <p>{product.price}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400"></FaStar>
                    {product.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
