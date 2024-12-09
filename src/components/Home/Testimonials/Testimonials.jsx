import React from "react";
import img1 from "../../../assets/testimonials/img1.png";
import img2 from "../../../assets/testimonials/img2.png";
import img3 from "../../../assets/testimonials/img3.png";
import img4 from "../../../assets/testimonials/img4.png";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    description:
      "The quality of the fabric exceeded my expectations, the fit was just perfect. I’ve recommended this brand to all my friends!",
    title: "Emily Grace",
    img: img1,
  },
  {
    id: 2,
    description:
      "I was so impressed with the quality of the fabric and the fit of the dress. I’ve already ordered another one in a different color!",
    title: "Sophia Marie",
    img: img2,
  },
  {
    id: 3,
    description:
      "I’ve never been so happy with an online purchase before. The dress was exactly what I was looking for, and the quality was amazing!",
    title: "Anne Mitchell",
    img: img3,
  },
  {
    id: 4,
    description:
      "I was so impressed with the quality of the fabric and the fit of the dress. I’ve already ordered another one in a different color!",
    title: " Rose Bennett",
    img: img4,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3700,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        // Change the number of slides to show on larger screens
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        // Change the number of slides to show on larger screens
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        // Change the number of slides to show on smaller screens
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-10 pb-10 dark:bg-gray-800 dark:text-white font-thin">
      <div className="container">
        {/*Header section*/}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p
            data-aos="fade-up"
            data-aos-once="true"
            className="text-sm text-secondary"
          >
            What our customers are saying
          </p>
          <h1
            data-aos="fade-up"
            data-aos-once="true"
            className="font-bold text-3xl"
          >
            Testimonials
          </h1>
          <p
            data-aos="fade-up"
            data-aos-once="true"
            className="text-sx text-gray-400"
          >
            "See what our happy customers are saying about their favorite styles
            and experiences with us!"
          </p>
        </div>
        {/* Testimonial cards */}
        <div data-aos="fade-up" data-aos-once="true">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="mb-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-900 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="rounded-full w-20 h-20 object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-400">
                        {data.description}
                      </p>
                      <h1 className="font-bold text-xl">{data.title}</h1>
                    </div>
                  </div>
                  <p className="text-black/20 dark:text-gray-400 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
