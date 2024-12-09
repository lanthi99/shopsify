import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import PartialProducts from "./components/Products/PartialProducts";

//import database
import products from "./components/Products/Database/Db";

//import AOS
import AOS from "aos";
import "aos/dist/aos.css";
import Display from "./components/Products/Display-All/Display";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const [filters, setFilters] = useState({
    category: [],
    color: [],
    priceRange: [],
  });

  const [filteredProducts, setFilteredProducts] = useState(products);

  const [message, setMessage] = useState("");

  const [searchQuery, setSearchQuery] = useState(""); //search query

  const categories = ["Top", "Bottom", "Dresses", "Footwear"];
  const colors = ["Black", "Beige", "Pink", "Red", "Yellow"];
  const priceRanges = [
    { label: "$0 - $50", range: [0, 50] },
    { label: "$50 - $100", range: [50, 100] },
    { label: "$100 - $150", range: [100, 150] },
  ];

  const handleOrder = () => {
    setOrderPopup(!orderPopup);
  };

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => {
      if (type === "priceRange") {
        const newPriceRange = prevFilters.priceRange.some(
          (range) => JSON.stringify(range) === JSON.stringify(value)
        )
          ? prevFilters.priceRange.filter(
              (range) => JSON.stringify(range) !== JSON.stringify(value)
            )
          : [...prevFilters.priceRange, value];
        return { ...prevFilters, priceRange: newPriceRange };
      } else {
        const newFilters = prevFilters[type].includes(value)
          ? prevFilters[type].filter((item) => item !== value)
          : [...prevFilters[type], value];
        return { ...prevFilters, [type]: newFilters };
      }
    });
  };

  const applyFilters = () => {
    let filtered = products;

    //apply existing filters
    if (filters.category.length > 0) {
      filtered = filtered.filter((product) =>
        filters.category.includes(product.category)
      );
    }
    if (filters.color.length > 0) {
      filtered = filtered.filter((product) =>
        filters.color.includes(product.color)
      );
    }
    if (filters.priceRange.length > 0) {
      filtered = filtered.filter((product) =>
        filters.priceRange.some(
          ([min, max]) => product.price >= min && product.price <= max
        )
      );
    }

    //if no product matches the filter, display a simple message to the user
    if (filtered.length === 0) {
      setMessage("No item found");
    } else {
      setMessage("");
    }
    setFilteredProducts(filtered);
  };

  const handleSearch = () => {
    if (searchQuery === "") {
      setFilteredProducts(products);
      setMessage("");
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filtered.length === 0) {
        setMessage("No item found");
      }
      setFilteredProducts(filtered);
    }
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div>
        <Navbar
          handleOrder={handleOrder}
          onSearch={handleSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/products"
            element={
              <Products
                categories={categories}
                colors={colors}
                priceRanges={priceRanges}
                filters={filters}
                onFilterChange={handleFilterChange}
                onApplyFilters={applyFilters}
                filteredProducts={filteredProducts}
                message={message}
              />
            }
          ></Route>
          <Route
            path="/top"
            element={
              <PartialProducts
                products={products.filter(
                  (product) => product.category === "Top"
                )}
                message={message}
              ></PartialProducts>
            }
          ></Route>
          <Route
            path="/bottom"
            element={
              <PartialProducts
                products={products.filter(
                  (product) => product.category === "Bottom"
                )}
                message={message}
              ></PartialProducts>
            }
          ></Route>
          <Route
            path="/dresses"
            element={
              <PartialProducts
                products={products.filter(
                  (product) => product.category === "Dresses"
                )}
                message={message}
              ></PartialProducts>
            }
          ></Route>
          <Route
            path="/footwear"
            element={
              <PartialProducts
                products={products.filter(
                  (product) => product.category === "Footwear"
                )}
                message={message}
              ></PartialProducts>
            }
          ></Route>
          {/* add route /product/${products.title} */}
          <Route
            path="/products/:title"
            element={<ProductDetails pd={products} />}
          ></Route>
          <Route></Route>
        </Routes>
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
