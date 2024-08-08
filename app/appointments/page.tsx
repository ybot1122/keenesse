import Link from "next/link";
import Tabs from "./Tabs";

export default function Appointments() {
  return (
    <main className="min-h-screen">
      <div className="bg-gray w-full p-10 md:pt-10 md:pb-10 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full max-w-[1024px]">
          <h1 className="text-4xl text-center block text-blue">Appointments</h1>
          <p className="text-center max-w-[725px] text-lg my-5 mx-auto">
            For individuals &amp; businesses seeking consultation services, find
            the option that best suits you.
          </p>
          <p className="text-center max-w-[725px] text-lg mx-auto">
            Don&apos;t see what you&apos;re looking for? We also customize
            offerings to match your needs.{" "}
            <Link href="/contact" className="text-underline">
              Let us know
            </Link>
            !
          </p>
          <div className="text-center mt-5 grid grid-cols-2 gap-2">
            <div className="bg-white border border-blue py-5 flex items-center justify-center flex-col">
              <p>
                <RightChevron />
              </p>
              <p className="text-xl align-middle underline">
                <Link href="#single">Browse our Single Sessions</Link>
              </p>
              <p>1 hour or 30 min options available</p>
              <p>FREE consultation for first time clients</p>
              <p className="mt-2">
                <RightChevron />
              </p>
            </div>
            <div className="bg-white border border-blue py-5 flex items-center justify-center flex-col">
              <p>
                <RightChevron />
              </p>
              <p className="text-xl align-middle underline">
                <Link href="#package">Browse our Packages</Link>
              </p>
              <p>Save by purchasing multiple sessions upfront</p>
              <p>Options start at $788</p>
              <p className="mt-2">
                <RightChevron />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Tabs />
    </main>
  );
}

const RightChevron = () => (
  <svg
    width="25"
    height="25"
    className="inline-block my-3 mx-2"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {" "}
    <g clip-path="url(#clip0_105_351)">
      {" "}
      <path
        d="M156.064 143.936L112.127 100L156.064 56.0636L200 100L156.064 143.936ZM43.9364 143.936L0 100L43.9364 56.0636L87.8728 100L43.9364 143.936ZM100 200L56.0636 156.064L100 112.127L143.936 156.064L100 200ZM100 87.8728L56.0636 43.9364L100 0L143.936 43.9364L100 87.8728Z"
        fill="url(#paint0_linear_105_351)"
      />{" "}
    </g>{" "}
    <defs>
      {" "}
      <linearGradient
        id="paint0_linear_105_351"
        x1="20.5"
        y1="16"
        x2="100"
        y2="200"
        gradientUnits="userSpaceOnUse"
      >
        {" "}
        <stop stop-color="#ACAAFF" /> <stop offset="1" stopColor="#C0E8FF" />{" "}
      </linearGradient>{" "}
      <clipPath id="clip0_105_351">
        {" "}
        <rect width="200" height="200" fill="white" />{" "}
      </clipPath>{" "}
    </defs>{" "}
  </svg>
);
