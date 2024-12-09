import React from "react";
import Input from "../Input/Input";

const Category = ({ categories, filters, onFilterChange }) => {
  return (
    <div className="pt-5 flex flex-col gap-4">
      <div>
        <h1 className="text-2xl border-b-2 dark:border-b-gray-500 pb-7">
          Filter
        </h1>
      </div>
      <div>
        <h1 className="sm:text-lg font-semibold">Category</h1>{" "}
        {categories.map((category) => (
          <div key={category}>
            <Input
              value={category}
              title={category}
              name="category"
              checked={filters.category.includes(category)}
              onChange={() => onFilterChange("category", category)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
