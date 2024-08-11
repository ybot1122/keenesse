"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClickableTile from "./ClickableTile";
import Image from "next/image";
import rightArrow from "@/public/arrow-icon-right.png";
import leftArrow from "@/public/arrow-icon-left.png";

const forIndividuals = [
  "Job Application Strategies",
  "Resume Development",
  "Interviewing",
  "Offer Negotiations",
  "Career Development & Transitions",
  "Growth & Leadership",
  "Lifestyle changes",
  "Accountability",
];

export default function ForIndividualsCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

const NextArrow = ({ className, style, onClick }: any) => {
  return (
    <button className={className} style={style} onClick={onClick}>
      <Image
        src={rightArrow}
        alt="Next slide"
        width={24}
        height={24}
        className="inline-block"
      />
    </button>
  );
};

const PrevArrow = ({ className, style, onClick }: any) => {
  return (
    <button
      className={className + " rounded-full bg-white"}
      style={style}
      onClick={onClick}
    >
      <Image
        src={leftArrow}
        alt="Previous slide"
        width={24}
        height={24}
        className="inline-block"
      />
    </button>
  );
};
