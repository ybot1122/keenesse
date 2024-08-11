import Link from "next/link";
import type { Metadata } from "next";
import handshake from "@/public/handshake.png";
import leadership from "@/public/leadership.png";
import ribbon from "@/public/ribbon.png";
import teamwork from "@/public/teamwork.png";
import Image from "next/image";
import WannaChat from "@/components/WannaChat";

export const metadata: Metadata = {
  title: "Keenesse",
  description:
    "Connect with a partner who has been where you are. Your first meeting is on us.",
  keywords: ["Keenesse", "coaching", "consulting", "software engineering"],
  openGraph: {
    title: "Keenesse",
    description:
      "Connect with a partner who has been where you are. Your first meeting is on us.",
    url: "https://www.keeness.com",
    siteName: "Keenesse",
  },
  twitter: {
    title: "Keenesse",
    description:
      "Connect with a partner who has been where you are. Your first meeting is on us.",
    card: "summary",
  },
};

export default function Home() {
  return (
    <main className="">
      <div className="text-center text-blue pt-[6vmax] pb-[5vw] px-5 w-[75%] mx-auto">
        <h1 className="tracking-normal text-5xl md:text-6xl animate-slideUpAndFadeIn">
          Navigate your journey with finesse
        </h1>
        <div
          id="subheadline"
          className="mt-10 mb-10 text-lightBlue italic underline animate-slideRightAndFadeIn font-bold"
        >
          <Link href="/appointments">Your first meeting is on us</Link>
        </div>
      </div>

      <div className="md:flex bg-blue text-white py-[5vmax] md:py-[10vmax] px-10 justify-center">
        <div className="md:pr-20 pb-10 text-center md:text-right text-4xl md:w-[325px]">
          Consultation Specialties
        </div>

        <div className="sectiontext text-2xl">
          <div className="grid grid-cols-2">
            <div className="col-span-2 text-center mb-5 text-3xl border-b border-t border-white py-5">
              For Individuals
            </div>

            <div className="col-span-1">
              <p className="px-5 pb-5">Job Application Strategies</p>
              <p className="px-5 pb-5">Resume Development</p>
              <p className="px-5 pb-5">Interviewing</p>
              <p className="px-5">Offer Negotiations</p>
            </div>
            <div className="col-span-1">
              <p className="px-5 pb-5">Career Development &amp; Transitions</p>
              <p className="px-5 pb-5">Growth &amp; Leadership</p>
              <p className="px-5 pb-5">Lifestyle Changes</p>
              <p className="px-5">Accountability</p>
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="col-span-2 text-center mt-10 mb-5 text-3xl border-b border-t border-white py-5">
              For Businesses
            </div>

            <div className="col-span-1">
              <p className="px-5 pb-5">Small Business Planning &amp; Launch</p>
              <p className="px-5 pb-5">Digital Transformation</p>
              <p className="px-5 pb-5">Website Design &amp; Development</p>
              <p className="px-5">Event Speaking</p>
            </div>
            <div className="col-span-1">
              <p className="px-5 pb-5">STEM Education</p>
              <p className="px-5 pb-5">Non-Profit Development</p>
              <p className="px-5 pb-5">Product Management</p>
              <p className="px-5">Customized Solutions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray text-blue w-full p-10 md:p-24">
        <h2 className="pb-10  text-center text-5xl md:w-[420px] mx-auto">
          Why Keenesse?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 text-center max-w-[1240px] mx-auto text-2xl">
          <div className="col-span-1 p-5">
            <p className="text-2xl">Care</p>
            <div className="relative w-[50px] mx-auto my-5">
              <Image src={handshake} alt="Care" />
            </div>
            <p>Every person and organization is cared for from day one</p>
          </div>
          <div className="col-span-1 p-5">
            <p className="text-2xl">Excellence</p>
            <div className="relative w-[50px] mx-auto my-5">
              <Image src={teamwork} alt="Excellence" />
            </div>
            <p>
              We ensure a quality of experience and take pride in doing our work
              with excellence
            </p>
          </div>
          <div className="col-span-1 p-5">
            <p className="text-2xl">Empowerment</p>
            <div className="relative w-[50px] mx-auto my-5">
              <Image src={leadership} alt="Empowerment" />
            </div>
            <p>
              Our commitment is to empower you and give you all the tools you
              need to succeed
            </p>
          </div>
          <div className="col-span-1 p-5">
            <p className="text-2xl">Authenticity</p>
            <div className="relative w-[50px] mx-auto my-5">
              <Image src={ribbon} alt="Authenticity" />
            </div>
            <p>
              We take the time to understand every unique situation and provide
              authentic, personalized solutions
            </p>
          </div>
        </div>
      </div>

      <WannaChat />
    </main>
  );
}
