"use client";

import { useState } from "react";

export default function FAQItem({
  q,
  a,
  isLast,
}: {
  q: string;
  a: string[];
  isLast: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={` flex py-10 border-t border-borderGray text-left w-full flex-wrap ${isLast ? "border-b" : ""}`}
    >
      <button
        className={`block text-blue text-2xl cursor w-1/2 text-left ${isOpen ? "mb-10" : ""} grow`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {q}
      </button>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? "mb-10" : ""} ml-5`}
        aria-hidden="true"
      >
        <div className="w-[20px] h-[1px] bg-blue" aria-hidden="true"></div>
        <div
          className={`w-[20px] h-[1px] bg-blue ${isOpen ? "animate-closePlus" : "rotate-90 animate-openPlus"}`}
          aria-hidden="true"
        ></div>
      </button>

      {isOpen &&
        a.map((ans) => (
          <p className="md:mx-10 w-full text-lg" key={ans}>
            {ans}
          </p>
        ))}
    </div>
  );
}
