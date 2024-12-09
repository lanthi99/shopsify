import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Darkmode from "./Darkmode";
import { useNavigate, useSearchParams } from "react-router-dom";

const Navbar = ({ handleOrder, onSearch, searchQuery, setSearchQuery }) => {
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
      name: "Dresses",
      link: "/dresses",
    },
    {
      id: 6,
      name: "Footwear",
      link: "/footwear",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  //const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    onSearch();
    navigate("/products?=" + searchQuery); // navigate to the products page with the search query
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const DropdownLinks = [
    {
      id: 1,
      name: "Watches",
      link: "/watches",
    },
    {
      id: 2,
      name: "Jewellery",
      link: "/jewellery",
    },
    {
      id: 3,
      name: "Sunglasses",
      link: "/sunglasses",
    },
  ];

  return (
    <div className="shadow-md bg-white dark:bg-gray-800 dark:text-white duration-200 relative z-40 font-thin">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-14 uppercase"></img>{" "}
              Shopsify
            </a>
          </div>
          {/* search bar and order button */}
          <div className="flex justify-between items-center gap-3">
            {/* Search bar */}
            <div className="relative group hidden sm:block">
              {/* hidden by default (mobile) but display as block when min-width = 640px */}
              <input
                type="text"
                placeholder="search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary
                dark:border-gray-500 dark:bg-gray-800"
              ></input>
              <IoMdSearch
                className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 dark:group-hover:text-white cursor-pointer"
                onClick={handleSearch}
              />
            </div>
            {/* Order button */}
            <button
              onClick={() => handleOrder()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 py-1 px-4 rounded-full flex items-center gap-3 group "
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              {/* hide the order button till hover over it */}
              <FaShoppingCart className="text-xl" />
            </button>
            {/* Darmode switch */}
            <div>
              <Darkmode />
            </div>
            {/* Hamburger menu for mobile screen */}
            <div
              className="block text-2xl cursor-pointer sm:hidden"
              onClick={toggleNavbar}
            >
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar, hidden when mobile */}
      <div
        data-aos="zoom-out"
        data-aos-duration="800"
        data-aos-once="true"
        className=""
      >
        <div className="">
          <ul
            className={`${
              isOpen ? "dark:bg-gray-800" : "h-0 hidden"
            } flex flex-col h-screen sm:h-auto sm:flex sm:flex-row sm:items-center sm:justify-center gap-4 transition-all ease-in w-full left-0`}
          >
            {menu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="inline-block px-4 hover:text-primary duration-200 "
                >
                  {item.name}
                </a>
              </li>
            ))}
            {/* dropdown of accessories */}
            <li className="group relative cursor-pointer">
              <a
                href="/#"
                className="flex items-center gap-[2px] sm:py-2 px-4 hover:text-primary transition-all duration-200"
              >
                Accessories
                <span>
                  <IoMdArrowDropdown className="transition-all duration-200 group-hover:rotate-180"></IoMdArrowDropdown>
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black dark:bg-gray-800 dark:text-white">
                <ul>
                  {DropdownLinks.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        className="inline-block w-full p-2 rounded-md hover:bg-primary/20 dark:hover:bg-secondary duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
