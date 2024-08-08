"use client";

import { useState } from "react";

export default function ClickableTile({ title }: { title: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-card h-full cursor-pointer">
      <div
        className={`flip-card-inner h-full ${flipped ? "flip-card-flip" : ""}`}
      >
        <div
          className={`flip-card-front flex justify-center flex-wrap`}
          onClick={() => setFlipped(!flipped)}
        >
          <div className="text-center self-start w-full mt-5">
            <Star />
            <Star />
            <Star />
          </div>
          <p className="text-blue text-center text-4xl self-center">{title}</p>
          <div className="text-center self-end w-full mb-5">
            <Star />
            <Star />
            <Star />
          </div>
        </div>

        <div className={`flip-card-back text-blue`}>Back</div>
      </div>
    </div>
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
