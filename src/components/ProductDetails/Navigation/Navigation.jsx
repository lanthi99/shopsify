import React from "react";
import { useParams } from "react-router-dom";

const Navigation = ({ pd }) => {
  return (
    <div className="ml-10 py-4 dark:text-gray-300">
      <div className="flex gap-4">
        <a className="hover:text-secondary dark:hover:text-secondary" href="/">
          Home
        </a>
        <span> &gt; </span>
        <a
          className="hover:text-secondary dark:hover:text-secondary"
          href="/products"
        >
          Products
        </a>
        <span> &gt; </span>
        <span className="font-bold">{pd.title}</span>
      </div>
    </div>
  );
};

export default Navigation;
