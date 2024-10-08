import FAQItem from "@/components/FAQItem";
import WannaChat from "@/components/WannaChat";
import type { Metadata } from "next";
import daisy from "@/public/my-pic.jpeg";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import Image from "next/image";


export const metadata: Metadata = {
  title: "Keenesse - About",
};

const faqs = [
  {
    q: "What can I expect during a coaching session?",
    a: [
      "You can choose to meet with any of our coaches to create a unique plan for your individual background and situation, measure progress and ensure that you're thriving within your strengths while also growing in each season.",
      "A free 30-minute discovery call is always offered to ensure we're the right fit for you! When you are ready to take the next steps, you can schedule incremental sessions or take advantage of our package offerings.",
    ],
  },
  {
    q: "I have a business consultation request. What should I do?",
    a: [
      "Keenesse coaching & consulting provides a wide array of professional services for businesses, non-profits and individuals. The first step is to schedule a free consultation to ensure we're a right fit.",
      "If you would like to proceed, Keenesse would provide a proposal and quote before we proceed to contract. The proposal will include expectations of the service, rates and method of payments, possible mileage or travel fees.",
    ],
  },

  {
    q: "Are there discounts for students?",
    a: [
      "Yes, students get an additional 15% off all packages! Email hello@keenesse.com from your .edu email address to request student discounts.",
    ],
  },

  {
    q: "Do you offer pro bono services?",
    a: [
      "On a case by case basis we offer pro bono services. At this time the capacity for pro bono services is full but feel free to email hello@keenesse.com or fill out the contact form on the website to inquire about future opportunities.",
    ],
  },
  {
    q: "Do you offer refunds?",
    a: [
      "No refunds for services are offered. But we understand that life happens. If you can no longer make a scheduled time, you are welcome to reschedule as many times as you would like using the reschedule link at the bottom of your booking confirmation email.",
    ],
  },
  {
    q: "I still have more questions, how do I reach out?",
    a: ["Don't be shy, email hello@keenesee.com with further questions!"],
  },
];

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
            I started Keenesse with one goal in mind: to provide every individual and organization with a
            partner to help them navigate their work and life journey with finesse.
          </p>
          <p className="text-xl mb-3 leading-8">
            At Keenesse, we provide specialized coaches and consultants who share our passion
            for improving people&apos;s lives and empowering businesses by
            listening, caring and providing personalized solutions.
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
            <Link href="/daisy">
              - Daisy
            </Link>
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
      <div className="bg-white w-full px-10 lg:p-24">
        <div className="w-full lg:grid lg:grid-cols-3">
          <h3 className="text-4xl text-blue lg:text-center lg:col-span-1 my-10 lg:text-6xl">
            FAQs
          </h3>

          <div className="lg:col-span-2">
            {faqs.map(({ q, a }, ind) => (
              <FAQItem q={q} a={a} isLast={ind === faqs.length - 1} key={q} />
            ))}
          </div>
        </div>
      </div>
      <WannaChat />{" "}
    </main>
  );
}
