import Image from "next/image";
import Link from "next/link";
import star from "@/public/icons8-star-24.png";

export default function BuyCard({
  href,
  title,
  price,
  priceEntice,
  indented,
  bg,
  label,
  details,
  highlight,
  highlightLevel = 1,
  bestValue = false,
  listType = "dot",
}: {
  href: string;
  title: string;
  priceEntice?: string;
  price?: string;
  indented: boolean;
  bg: "gray" | "white";
  label?: string;
  details: string[];
  highlight?: string;
  highlightLevel?: 1 | 2;
  bestValue?: boolean;
  listType?: "dot" | "star";
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

      <ul
        className={`text-left max-w-[75%] mx-auto text-lg ${listType === "dot" ? "list-disc" : ""}`}
      >
        {details.map((d) => (
          <li key={d} className="mb-2">
            {listType === "star" && <Star />}
            {d}
          </li>
        ))}
      </ul>

      {price && <p className="text-blue text-2xl mt-5">{price}</p>}
      {priceEntice && <p className="mb-5 text-md">{priceEntice}</p>}
      {bestValue && (
        <div className="bg-yellow font-bold w-[125px] mx-auto p-2">
          <p>18% OFF</p>
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
    width={16}
    height={16}
    className="inline mr-2 mb-1"
    alt="list item"
  />
);
