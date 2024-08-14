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
        className={`block text-blue text-2xl cursor w-1/2 text-left ${isOpen ? "mb-10" : ""} grow mr-5`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {q}
      </button>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? "mb-10" : ""} ml-5 relative w-[20px]`}
        aria-hidden="true"
      >
        <div
          className="right-[20px] absolute inline-block w-[20px] h-[2px] bg-blue"
          aria-hidden="true"
        ></div>
        <div
          className={`right-[20px] inline-block w-[20px] h-[2px] bg-blue absolute ${isOpen ? "animate-closePlus" : "rotate-90 animate-openPlus"}`}
          aria-hidden="true"
        ></div>
      </button>

      {isOpen &&
        a.map((ans) => (
          <p className="md:mx-10 w-full text-lg mb-5" key={ans}>
            {ans}
          </p>
        ))}
    </div>
  );
}
