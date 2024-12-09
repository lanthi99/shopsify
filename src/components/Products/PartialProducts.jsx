import React, { useState } from "react";
import Display from "./Display-All/Display";

const PartialProducts = ({ products, message }) => {
  return (
    <div className="flex gap-5 dark:bg-gray-700 dark:text-white">
      <Display products={products} message={message} />
    </div>
  );
};

export default PartialProducts;
