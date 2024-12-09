import React from "react";
import img1 from "../../../assets/banner/img1.png";
import { GrSecure } from "react-icons/gr";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";

const Banner = () => {
  return (
    <div className="pt-10 pb-28 dark:bg-gray-800 dark:text-white font-thin">
      {/* min-h-[550px] flex justify-center items-center py-12 sm:py-0 */}
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image section */}
          <div
            data-aos="zoom-in"
            data-aos-once="true"
            className=" flex flex-col items-center justify-center"
          >
            <img
              src={img1}
              alt="Winter Sale"
              className="w-[410px] h-[360px] object-cover drop-shadow-lg"
            />
          </div>
          {/* Details section */}
          <div
            data-aos="zoom-out"
            data-aos-once="true"
            className="flex flex-col gap-4 justify-center"
          >
            <h1 className="text-3xl font-bold">Winter Sale Up To 50%</h1>
            <p className="text-gray-400 text-sm tracking-wide leading-5">
              Bundle up and save big with up to 50% off on cozy sweaters,
              stylish jackets, and more! Don’t miss out—stock up on your winter
              essentials before it’s gone.
            </p>
            <div className="flex flex-col gap-4">
              <div
                className="flex items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <GrSecure className="text-2xl font-bold h-12 w-12 shadow-sm p-3 rounded-full bg-violet dark:bg-violetD" />
                <p>Quality Product</p>
              </div>
              <div
                className="flex items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <CiDeliveryTruck className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-pink dark:bg-pinkD" />
                <p>Fast Delivery</p>
              </div>
              <div
                className="flex items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <RiSecurePaymentLine className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-Yellow dark:bg-yellowD" />
                <p>Easy and Secure Payment</p>
              </div>
              <div
                className="flex items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <MdOutlineLocalOffer className="text-2xl h-12 w-12 p-3 shadow-sm rounded-full bg-green dark:bg-greenD" />
                <p>Special Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
