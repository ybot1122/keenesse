import Link from "next/link";

export default function SingleSessionCard({
  href,
  description,
  title,
  price,
  indented,
  bg,
  label,
  extra,
}: {
  href: string;
  description: string;
  title: string;
  price?: string;
  indented: boolean;
  bg: "gray" | "white";
  label?: string;
  extra?: string;
}) {
  return (
    <div
      className={`col-span-1 bg-${bg} pb-10 flex flex-col justify-between ${indented && "md:translate-y-10"}`}
    >
      <div className="h-[24px] bg-buyAccent" />
      <p className="mt-10 mb-5 text-lg px-2">{description}</p>
      <h3 className="text-blue text-3xl mb-5 px-2">{title}</h3>
      {price && <p className="text-blue text-2xl mb-10">{price}</p>}
      {extra && <p>{extra}</p>}
      <div className="text-center">
        <Link
          href={href}
          target="_blank"
          className="inline-block bg-blue text-white py-3 w-3/4 max-w-[200px] font-semibold hover:bg-sendHover"
        >
          {label ?? "Schedule"}
        </Link>
      </div>
    </div>
  );
}
