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
      className={`py-10 border-t border-borderGray text-left w-full ${isLast ? "border-b" : ""}`}
    >
      <button
        className={`block text-blue text-2xl cursor w-full text-left ${isOpen ? "mb-10" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {q}
      </button>

      {isOpen && a.map((ans) => <p className="md:ml-20 mb-5">{ans}</p>)}
    </div>
  );
}
