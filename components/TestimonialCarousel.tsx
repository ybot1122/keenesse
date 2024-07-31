"use client";

import Link from "next/link";
import React, { useCallback } from "react";
const testimonials = [
  {
    id: "a",
    from: "Steve",
    message:
      "Just wanted to thank you so much for your help in working on my resume and offering feedback and support. I just accepted a job that I’m excited about and I just wanted to express my gratitude!",
  },
  {
    id: "b",
    message:
      "Thank you so much, Daisy! You gave me really PRACTICAL things I could change!",
    from: "Linda",
  },
  {
    id: "c",
    from: "Aminat",
    message:
      "I had the best time chatting with Daisy during my consultation. I've talked with other coaches but I felt seen and right at home.",
  },
  {
    id: "d",
    message: "Daisy, you are a valuable resource!",
    from: "Mercer Alliance Group",
  },
];

const TestimonialCarousel = ({}: {}) => {
  const [slideDir, setSlideDir] = React.useState<"left" | "right">("left");
  const [prevInd, setPrevInd] = React.useState(0);
  const [activeInd, setActiveInd] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const next = useCallback(() => {
    setPrevInd(activeInd);
    setSlideDir("left");
    setActiveInd((activeInd + 1) % testimonials.length);
    setIsAnimating(true);
  }, [activeInd]);
  const prev = useCallback(() => {
    setPrevInd(activeInd);
    setSlideDir("right");
    setActiveInd(activeInd === 0 ? testimonials.length - 1 : activeInd - 1);
    setIsAnimating(true);
  }, [activeInd]);
  const onAnimationEnd = useCallback(() => {
    setIsAnimating(false);
  }, []);

  return (
    <div className="group flex relative w-full aspect-square md:aspect-video mx-auto justify-center overflow-hidden">
      <button
        className="absolute z-30 w-10 aspect-square bg-transparentBlack text-white rounded-full p-2 left-2 self-center hover:bg-orange transition"
        onClick={prev}
      >
        <ChevronLeft className="" />
      </button>
      <button
        className="absolute z-30 w-10 aspect-square bg-transparentBlack text-white rounded-full p-2 right-2 self-center hover:bg-orange transition"
        onClick={next}
      >
        <ChevronRight className="" />
      </button>

      {testimonials.map((t, ind) => {
        const inAnimation =
          (ind === activeInd || ind === prevInd) && isAnimating;
        const hidden = !inAnimation && ind !== activeInd ? "hidden" : "";
        const z = ind === activeInd ? "z-20" : "z-10";
        let animation;

        if (slideDir === "left") {
          if (ind === activeInd) {
            animation = "animate-carouselSlideInToLeft";
          } else {
            animation = "animate-carouselSlideOutToLeft";
          }
        } else {
          if (ind === activeInd) {
            animation = "animate-carouselSlideInToRight";
          } else {
            animation = "animate-carouselSlideOutToRight";
          }
        }

        return (
          <div
            className={`absolute flex ${inAnimation && animation} ${hidden} w-full h-full ${z} bg-tan`}
            onAnimationEnd={onAnimationEnd}
            key={t.id}
          >
            <div className="bg-white m-5 text-blue text-center p-10 max-w-[520px]">
              <p className="text-2xl">&ldquo;{t.message}&rdquo;</p>
              {t.from ? <p className="mt-5">{t.from}</p> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ChevronRight = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="3"
    stroke="currentColor"
    className={`w-full h-full ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

const ChevronLeft = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="3"
    stroke="currentColor"
    className={`w-full h-full ${className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);

export { TestimonialCarousel };
