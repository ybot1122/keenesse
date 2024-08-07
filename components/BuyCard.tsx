import Link from "next/link";

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
}) {
  let highlightClass = "mx-auto w-[80px] ";
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

      <ul className="text-left max-w-[75%] mx-auto list-disc text-lg">
        {details.map((d) => (
          <li key={d} className="mb-2">
            {d}
          </li>
        ))}
      </ul>

      {price && <p className="text-blue text-2xl my-5">{price}</p>}
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
