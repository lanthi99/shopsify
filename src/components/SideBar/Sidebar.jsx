import React from "react";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import Button from "./Button/Button";

const Sidebar = ({
  categories,
  colors,
  priceRanges,
  filters,
  onFilterChange,
  onApplyFilters,
}) => {
  return (
    <div className="flex flex-col gap-4 dark:bg-gray-700 dark:text-white font-thin border-r-2 border-r-gray-200 dark:border-r-gray-600 shadow-md w-[250px] px-5 py-5">
      <Category
        categories={categories}
        filters={filters}
        onFilterChange={onFilterChange}
      />
      <Colors
        colors={colors}
        filters={filters}
        onFilterChange={onFilterChange}
      />
      <Price
        priceRanges={priceRanges}
        filters={filters}
        onFilterChange={onFilterChange}
      />
      <Button onApplyFilters={onApplyFilters} />
    </div>
  );
};

export default Sidebar;
