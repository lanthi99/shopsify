import React from "react";
import Model from "../../../assets/model.png";
import Model1 from "../../../assets/model1.png";
import Model2 from "../../../assets/model2.png";
import Model3 from "../../../assets/model3.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    image: Model,
    title: "Summer Collection",
    description:
      "This summer clothing collection is all about light, breathable fabrics that keep you cool in the heat, featuring vibrant colors and bold prints inspired by tropical destinations. With a mix of casual and elegant pieces, it includes everything from flowy sundresses and linen shorts to stylish rompers and airy blouses.",
  },
  {
    id: 2,
    image: Model1,
    title: "Fall Collection",
    description:
      "This fall clothing collection combines cozy, warm fabrics with rich, earthy tones like burnt orange, deep burgundy, and forest green to echo the season’s natural palette. With a mix of stylish layers, it offers soft knit sweaters, plaid scarves, and classic trench coats that bring both warmth and sophistication.",
  },
  {
    id: 3,
    image: Model2,
    title: "Winter Collection",
    description:
      "This winter clothing collection is all about comfort and style, featuring cozy fabrics like wool and cashmere in a palette of soft neutrals and classic winter shades. With a mix of casual and elegant pieces, it includes everything from warm knit sweaters and tailored coats to soft flannel shirts and stylish boots.",
  },
  {
    id: 4,
    image: Model3,
    title: "Spring Collection",
    description:
      "This spring clothing collection is all about fresh, light fabrics and soft pastel colors that capture the essence of the season. With a mix of casual and elegant pieces, it includes everything from flowy sundresses and lightweight blouses to stylish trench coats and tailored trousers.",
  },
];

const Hero = ({ handleOrder }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3700,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="shadow-md relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex justify-center items-center bg-gray-100 dark:bg-gray-700 dark:text-white duration-200 font-thin">
      {/* background pattern */}
      <div className="h-[470px] w-[470px] bg-primary/20 absolute rounded-3xl rotate-45 -top-5"></div>
      {/* hero section*/}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((item) => (
            <div key={item.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-7xl font-bold"
                  >
                    {item.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-sm"
                  >
                    {item.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-once="true"
                  >
                    <button
                      className="bg-gradient-to-r from-primary to-secondary dark:bg-gradient-to-r dark:from-primary/40 dark:to-secondary/40 transition-all duration-200 py-2 px-4 rounded-full hover:scale-105"
                      onClick={() => handleOrder()}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-125 object-contain mx-auto"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
