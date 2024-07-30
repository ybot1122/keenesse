import Link from "next/link";
import type { Metadata } from "next";

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
        <h1 className="tracking-normal text-4xl md:text-6xl animate-slideUpAndFadeIn">
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
        <div className="md:pr-20 pb-10 text-center md:text-right text-4xl">
          Consultation Specialties
        </div>

        <div className="sectiontext md:mr-20">
          <div className="grid grid-cols-2">
            <div className="col-span-2 font-bold text-center mb-5 text-xl border-b border-t border-white py-5">
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
            <div className="col-span-2 font-bold text-center my-5 text-xl border-b border-t border-white py-5">
              For Businesses
            </div>

            <div className="col-span-1">
              <p className="px-5 pb-5">Small Business Planning &amp; Launch</p>
              <p className="px-5 pb-5">Digital Transformation</p>
              <p className="px-5 pb-5">Website Design &amp; Development</p>
              <p className="px-5">Product Management</p>
            </div>
            <div className="col-span-1">
              <p className="px-5 pb-5">STEM Education</p>
              <p className="px-5 pb-5">Non-profit development</p>
              <p className="px-5 pb-5">Event Speaking</p>
              <p className="px-5">Customized Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
