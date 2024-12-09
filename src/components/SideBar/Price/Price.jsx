import React from "react";
import Input from "../Input/Input";

const Price = ({ priceRanges, filters, onFilterChange }) => {
  return (
    <div>
      <h1 className="sm:text-lg font-semibold">Price</h1>
      {priceRanges.map(({ label, range }) => (
        <div key={label}>
          <Input
            value={range}
            title={label}
            name="price"
            checked={filters.priceRange.some(
              (r) => JSON.stringify(r) === JSON.stringify(range)
            )}
            onChange={() => onFilterChange("priceRange", range)}
          />
        </div>
      ))}
    </div>
  );
};

export default Price;
