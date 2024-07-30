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
        <div className="pr-20 pb-10 md:text-right text-2xl md:text-4xl">
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
