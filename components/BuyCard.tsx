import Image from "next/image";
import Link from "next/link";
import star from "@/public/icons8-star-24.png";

export default function BuyCard({
  href,
  title,
  price,
  indented,
  bg,
  label,
  details,
  highlight,
  highlightLevel = 1,
  bestValue = false,
}: {
  href: string;
  title: string;
  price?: string;
  indented: boolean;
  bg: "gray" | "white";
  label?: string;
  details: string[];
  highlight?: string;
  highlightLevel?: 1 | 2;
  bestValue?: boolean;
}) {
  let highlightClass = "mx-auto font-bold ";
  if (highlightLevel === 1) {
    highlightClass += "";
  } else if (highlightLevel === 2) {
    highlightClass += "font-bold bg-yellow";
  }

  return (
    <div
      className={`col-span-1 bg-${bg} pb-10 flex flex-col justify-between ${indented && "md:translate-y-10"}`}
    >
      <div className="h-[24px] bg-buyAccent" />
      <h3 className="text-blue text-3xl mb-5 px-2 mt-10">{title}</h3>

      <ul className="text-left max-w-[75%] mx-auto text-lg">
        {details.map((d) => (
          <li key={d} className="mb-2">
            <Star />
            {d}
          </li>
        ))}
      </ul>

      {price && <p className="text-blue text-2xl my-5">{price}</p>}
      {bestValue && (
        <div className="bg-yellow font-bold w-[125px] mx-auto p-2">
          <p>BEST VALUE</p>
          <p>16% SAVINGS</p>
        </div>
      )}
      {highlight && <p className={highlightClass}>{highlight}</p>}
      <div className="text-center mt-5">
        <Link
          href={href}
          target="_blank"
          className="inline-block bg-blue text-white text-lg py-3 w-3/4 max-w-[200px] font-semibold hover:bg-sendHover"
        >
          {label ?? "Schedule"}
        </Link>
      </div>
    </div>
  );
}

const Star = () => (
  <Image
    src={star}
    width={24}
    height={24}
    className="inline mr-2 mb-1"
    alt="list item"
  />
);
