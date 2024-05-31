import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Keenesse Coaching & Consulting",
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-gray w-full p-10 md:p-24 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full md:w-1/2 max-w-[420px] h-[50vw] max-h-[420px]">
          <div className="relative w-full h-full">
            <Image
              src="/my-pic.jpeg"
              alt="Daisy"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="bg-white p-10 text-blue w-full md:w-1/2  max-w-[420px]">
          <h3 className="text-3xl mb-3">Hi, I&apos;m Daisy</h3>
          <p className="text-xl mb-3">
            I started Keenesse with one goal in mind: to connect people with a
            partner who has been in their shoes and can help them navigate their
            work, studies and life with finesse. I strongly believe in the power
            of coaching, accountability and support.
          </p>
          <p className="text-xl mb-3">
            I have a 12+ years track record of growing individuals and building
            projects from the ground up in business, non-profit and technology
            sectors amongst others. I provide consulting services on a wide
            array of areas. To name a few: software engineering, product/program
            management, education, research and development.
          </p>
          <p className="text-xl mb-3">
            I truly care about each client. I take the time to understand their
            needs and I have dedicated the last 4 years to making myself
            available to my clients around the globe.
          </p>
          <p className="text-xl mb-3">
            Still interested?{" "}
            <Link href="/appointments" className="underline">
              Let&apos;s work together!
            </Link>
          </p>
        </div>
      </div>
      <h1>about</h1>
    </main>
  );
}
