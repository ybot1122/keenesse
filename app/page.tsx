import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keenesse Coaching & Consulting",
  description:
    "Connect with a partner who has been where you are. Your first meeting is on us.",
  keywords: ["Keenesse", "coaching", "consulting", "software engineering"],
  openGraph: {
    title: "Keenesse Coaching & Consulting",
    description:
      "Connect with a partner who has been where you are. Your first meeting is on us.",
    url: "https://www.keeness.com",
    siteName: "Keenesse Coaching & Consulting",
  },
  twitter: {
    title: "Keenesse Coaching & Consulting",
    description:
      "Connect with a partner who has been where you are. Your first meeting is on us.",
    card: "summary",
  },
};

export default function Home() {
  return (
    <main className="">
      <div className="text-center text-blue pt-[6vmax] pb-[5vw] px-5 w-[75%] mx-auto">
        <h1 className="tracking-normal text-4xl md:text-6xl">
          Connect with a partner who has been where you are.
        </h1>
        <div
          id="subheadline"
          className="mt-10 mb-10 text-lightBlue italic underline"
        >
          <Link href="/appointments">Your first meeting is on us</Link>
        </div>
      </div>

      <div className="md:flex bg-blue text-white py-[5vmax] md:py-[10vmax] px-10 justify-center">
        <div id="sectionheadline" className="pr-20 pb-10 md:text-right">
          Consultation Specialties
        </div>

        <div className="sectiontext mr-20">
          <p className="pb-5">Career Development & Transitions</p>
          <p className="pb-5">Graduate Studies</p>
          <p className="pb-5">Interviewing</p>
          <p className="pb-5">Public Speaking</p>
        </div>

        <div className="sectiontext">
          <p className="pb-5">Software Engineering</p>

          <p className="pb-5">Program Management</p>

          <p className="pb-5">Job Offer Negotiations</p>

          <p className="pb-5">Lifestyle changes</p>
        </div>
      </div>
    </main>
  );
}
