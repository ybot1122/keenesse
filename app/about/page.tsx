import WannaChat from "@/components/WannaChat";
import type { Metadata } from "next";
import daisy from "@/public/my-pic.jpeg";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Keenesse - About",
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-gray w-full p-5 md:p-10 lg:p-24 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="bg-gray w-full p-5 md:p-10 lg:p-24 flex justify-center flex-wrap md:flex-row-reverse">
          <div className="w-full md:w-1/2 max-w-[620px] h-[50vw] max-h-[420px]">
            <div className="relative w-full h-full">
              <Image
                src={daisy}
                alt="Daisy"
                fill
                className="object-cover"
                placeholder="blur"
              />
            </div>
          </div>
          <div className="bg-white p-10 text-blue w-full md:w-1/2 lg:p-20 max-w-[620px]">
            <h3 className="text-4xl mb-5 lg:text-6xl">Welcome!</h3>
            <p className="text-xl mb-3 leading-8">
              I started Keenesse with one goal in mind: to provide every
              individual and organization with a partner to help them navigate
              their work and life journey with finesse.
            </p>
            <p className="text-xl mb-3 leading-8">
              At Keenesse, we provide specialized coaches and consultants who
              share our passion for improving people&apos;s lives and empowering
              businesses by listening, caring and providing personalized
              solutions.
            </p>
            <p className="text-xl mb-3 leading-8">
              Our clients&apos; success is our success. We are dedicated to
              understanding and exceeding their expectations. We conduct our
              business with the highest ethical standards, ensuring trust and
              credibility in all our relationships.
            </p>
            <p className="text-xl mb-3 leading-8">
              Thank you for stopping by, hope to hear from you soon!
            </p>
            <p className="text-xl mb-3 leading-8">
              <Link href="/daisy">- Daisy</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-blue w-full p-5 items-center flex-wrap justify-center">
        <h3 className="text-4xl text-white text-center my-10 w-full lg:text-6xl">
          What Clients are Saying
        </h3>

        <Testimonials />
      </div>
      <FAQ />
      <WannaChat />{" "}
    </main>
  );
}
