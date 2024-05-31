import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Keenesse Coaching & Consulting",
};

const testimonials = [
  {
    id: "a",
    message:
      "Since speaking with Daisy, I have gained confidence to network on LinkedIn",
  },
  {
    id: "b",
    message:
      "Thank you so much, Daisy! You gave me really PRACTICAL things I could change!",
    from: "Linda",
  },
  {
    id: "c",
    message:
      "I appreciate Daisy's honest feedback and willingess to help with career advice.",
  },
  {
    id: "d",
    message:
      "The exercise to identify gap analysis was the most helpful from our session.",
    from: "Jessi",
  },
];

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-gray w-full p-10 md:p-24 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full md:w-1/2 max-w-[620px] h-[50vw] max-h-[420px]">
          <div className="relative w-full h-full">
            <Image
              src="/my-pic.jpeg"
              alt="Daisy"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="bg-white p-10 text-blue w-full md:w-1/2 lg:p-20 max-w-[620px]">
          <h3 className="text-4xl mb-5">Hi, I&apos;m Daisy</h3>
          <p className="text-xl mb-3 leading-8">
            I started Keenesse with one goal in mind: to connect people with a
            partner who has been in their shoes and can help them navigate their
            work, studies and life with finesse. I strongly believe in the power
            of coaching, accountability and support.
          </p>
          <p className="text-xl mb-3 leading-8">
            I have a 12+ years track record of growing individuals and building
            projects from the ground up in business, non-profit and technology
            sectors amongst others. I provide consulting services on a wide
            array of areas. To name a few: software engineering, product/program
            management, education, research and development.
          </p>
          <p className="text-xl mb-3 leading-8">
            I truly care about each client. I take the time to understand their
            needs and I have dedicated the last 4 years to making myself
            available to my clients around the globe.
          </p>
          <p className="text-xl mb-3 leading-8">
            Still interested?{" "}
            <Link href="/appointments" className="underline">
              Let&apos;s work together!
            </Link>
          </p>
        </div>
      </div>

      <div className="flex bg-blue w-full p-5 items-center flex-wrap justify-center">
        <h3 className="text-4xl text-white text-center my-10 w-full">
          What Clients are Saying
        </h3>

        {testimonials.map((t) => (
          <div
            className="bg-white m-5 text-blue text-center p-10 max-w-[520px]"
            key={t.id}
          >
            <p className="text-2xl">&ldquo;{t.message}&rdquo;</p>
            {t.from ? <p className="mt-5">{t.from}</p> : null}
          </div>
        ))}
      </div>
      <h1>about</h1>
    </main>
  );
}
