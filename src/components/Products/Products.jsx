import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import Display from "./Display-All/Display";
import products from "./Database/Db";
import { CiFilter } from "react-icons/ci";

const Product = ({
  categories,
  colors,
  priceRanges,
  filters,
  onFilterChange,
  onApplyFilters,
  filteredProducts,
  message,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex gap-5 dark:bg-gray-700 dark:text-white">
      {isOpen && (
        <Sidebar
          categories={categories}
          colors={colors}
          priceRanges={priceRanges}
          filters={filters}
          onFilterChange={onFilterChange}
          onApplyFilters={onApplyFilters}
        />
      )}
      <Display products={filteredProducts} message={message} />
      <CiFilter
        className="text-3xl sm:text-5xl cursor-pointer fixed bottom-5 right-5 hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 dark:text-white p-2 rounded-full shadow-md"
        onClick={toggleFilter}
      />
    </div>
  );
};

export default Product;
