import React from "react";
import Hero from "./Hero/Hero";

import Banner from "./Banner/Banner";
import Product from "./Products/Product";
import TopProduct from "./TopRatingProduct/TopProduct";
import Subscribe from "./Subscribe/Subscribe";
import Testimonials from "./Testimonials/Testimonials";
import Popup from "../Popup/Popup";

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrder = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <div>
      <Hero handleOrder={handleOrder} />
      <Product />
      <TopProduct handleOrder={handleOrder} />
      <Banner />
      <Subscribe />
      <Testimonials />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default Home;
