"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClickableTile from "./ClickableTile";

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
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1620,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {forIndividuals.map((i) => {
        return (
          <div key={i} className="text-center h-[340px] px-10">
            <div className="h-full flex justify-center flex-wrap">
              <ClickableTile title={i} />
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
