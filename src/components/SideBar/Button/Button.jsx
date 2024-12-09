import React from "react";

const Button = ({ onApplyFilters }) => {
  return (
    <div>
      <button
        onClick={onApplyFilters}
        className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 px-3 py-1 rounded-md"
      >
        Apply filter
      </button>
    </div>
  );
};

export default Button;
