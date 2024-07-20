import Link from "next/link";

export default function WannaChat({
  bg = "bg-blue",
}: {
  bg?: "bg-blue" | "bg-gray";
}) {
  const fontcolor = bg === "bg-blue" ? "text-white" : "text-blue";
  return (
    <div
      className={`flex ${bg} w-full pt-10 pb-20 items-center flex-wrap justify-center`}
    >
      <h3 className={`text-4xl ${fontcolor} text-center my-10 w-full px-20`}>
        Have questions or just want to chat?
      </h3>

      <Link
        className="bg-white text-blue py-5 px-10 hover:bg-gray"
        href="/contact"
      >
        Drop a Message
      </Link>
    </div>
  );
}
