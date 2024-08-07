"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const forIndividuals = [
  "Small Business Planning & Launch",
  "Digital Transformation",
  "Website Design & Development",
  "Product Management",
  "STEM Education & Curriculum development",
  "Non-profit development",
  "Event Speaking",
  "Customized Solutions",
];

export default function ForIndividualsCarousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {forIndividuals.map((i) => {
        return (
          <div key={i} className="flex items-center text-center h-[150px]">
            <p>{i}</p>
          </div>
        );
      })}
    </Slider>
  );
}
