import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import DetailSection from "./DetailSection/DetailSection";

const ProductDetails = ({ pd }) => {
  const { title } = useParams(); // get the title from the URL params
  const product = pd.find((product) => product.title === title); // find the product with the title in the URL params

  return (
    <div className="font-thin dark:text-white dark:bg-gray-700">
      <Navigation pd={product} />
      <DetailSection pd={product} />
    </div>
  );
};

export default ProductDetails;
