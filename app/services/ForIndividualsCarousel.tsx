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
            <div className="bg-white h-full flex justify-center flex-wrap">
              <div className="text-center self-start w-full mt-5">
                <Star />
                <Star />
                <Star />
              </div>
              <p className="text-blue text-center text-4xl self-center">{i}</p>
              <div className="text-center self-end w-full mb-5">
                <Star />
                <Star />
                <Star />
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

const Star = () => (
  <svg
    width="25"
    height="25"
    className="inline-block"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {" "}
    <g clip-path="url(#clip0_116_139)">
      {" "}
      <path
        d="M100 0L105.94 94.0603L200 100L105.94 105.94L100 200L94.0603 105.94L0 100L94.0603 94.0603L100 0Z"
        fill="url(#paint0_linear_116_139)"
      />{" "}
    </g>{" "}
    <defs>
      {" "}
      <linearGradient
        id="paint0_linear_116_139"
        x1="20.5"
        y1="16"
        x2="100"
        y2="200"
        gradientUnits="userSpaceOnUse"
      >
        {" "}
        <stop stop-color="#ACAAFF" /> <stop offset="1" stop-color="#C0E8FF" />{" "}
      </linearGradient>{" "}
      <clipPath id="clip0_116_139">
        {" "}
        <rect width="200" height="200" fill="white" />{" "}
      </clipPath>{" "}
    </defs>{" "}
  </svg>
);
