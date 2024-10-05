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

export default function Breadcrumb({}) {
  return (
    <div className="flex flex-row items-center">
      <Link href="/appointments" className="underline">
        Appointments
      </Link>
      <Arrow />{" "}
      <Link href="/daisy" className="underline">
        Daisy
      </Link>
    </div>
  );
}
