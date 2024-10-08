import { Coach } from "@/constants/Coaches";
import Link from "next/link";

const Arrow = () => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    width="1em"
  >
    <path d="m9 18 6-6-6-6"></path>
  </svg>
);

export default function Breadcrumb({ coach }: { coach: Coach }) {
  return (
    <div className="bg-gray w-full flex justify-center">
      <div className="flex flex-row items-center w-full max-w-[1024px] px-[70px] pt-5 text-blue justify-center md:justify-start">
        <Link href="/appointments" className="underline">
          Appointments
        </Link>
        <Arrow />{" "}
        <Link href={`/${coach.toLowerCase()}`} className="underline">
          {coach}
        </Link>
      </div>
    </div>
  );
}
