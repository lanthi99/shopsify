import React from "react";
import image from "../../assets/footer/image.png";
import logo from "../../assets/logo.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const FooterImg = {
  backgroundImage: `url(${image})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "400px",
  width: "100%",
};

const Footer = () => {
  const follow = [
    {
      id: 1,
      img: <FaSquareInstagram />,
      link: "https://www.instagram.com/",
    },
    {
      id: 2,
      img: <FaTwitter />,
      link: "https://twitter.com/",
    },
    {
      id: 3,
      img: <FaFacebook />,
      link: "https://www.facebook.com/",
    },
  ];

  const menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "All Products",
      link: "/products",
    },
    {
      id: 3,
      name: "Top",
      link: "/top",
    },
    {
      id: 4,
      name: "Bottom",
      link: "/bottom",
    },
    {
      id: 5,
      name: "Footwear",
      link: "/footwear",
    },
  ];
  return (
    <div
      className="pt-12 lg:px-10 dark:bg-gray-800 text-gray-800 font-thin"
      style={FooterImg}
    >
      <div
        className="container flex justify-between pt-5"
        data-aos="zoom-in"
        data-aos-once="true"
      >
        {/* logo and text section */}
        <div className="flex flex-col gap-5">
          <div>
            <a href="/" className="font-bold text-xl lg:text-4xl flex gap-2">
              <img src={logo} alt="Logo" className="w-10 lg:w-32"></img>
              <div className="my-auto">Shopify</div>
            </a>
          </div>
          <p className="text-xs max-w-[150px] lg:text-xl lg:max-w-[300px]">
            © 2024 [Shopsify]. All rights reserved. | Privacy Policy | Terms of
            Service | Follow us on social media for the latest updates!
          </p>
        </div>
        {/* Shop section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-sm lg:text-2xl font-bold">Shop</h1>
          <ul className="text-xs lg:text-xl">
            {menu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="inline-block hover:text-white duration-200 "
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li></li>
          </ul>
        </div>
        {/* Company section */}
        <div>
          <h1 className="text-sm lg:text-2xl font-bold">Company</h1>
          <div className="text-xs lg:text-xl ">
            <p className="cursor-pointer hover:text-white duration-200 ">
              About us
            </p>
            <p className="cursor-pointer hover:text-white duration-200 ">
              Our Services
            </p>
            <p className="cursor-pointer hover:text-white duration-200 ">
              Privacy Policy
            </p>
          </div>
        </div>
        {/* Follow us section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-sm lg:text-2xl font-bold">Follow Us</h1>
          <div className="">
            <ul className="flex gap-2 text-lg lg:text-3xl">
              {follow.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.img}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-1">
            <FaLocationArrow className="text-xs lg:text-xl" />
            <p className="text-xs lg:text-xl ">Montreal, Canada</p>
          </div>
          <div className="flex gap-1">
            <FaMobileAlt className="text-xs lg:text-xl" />
            <p className="text-xs lg:text-xl ">+1 123 456 7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
