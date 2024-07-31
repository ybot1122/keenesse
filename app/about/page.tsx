import FAQItem from "@/components/FAQItem";
import WannaChat from "@/components/WannaChat";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import me from "@/public/my-pic.jpeg";

export const metadata: Metadata = {
  title: "Keenesse - About",
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

const faqs = [
  {
    q: "What can I expect during a coaching session?",
    a: [
      "Keenesse provides a partner to help you navigate life so that you can achieve your personal, career and life goals! Together, we'll create a unique plan for your individual background and interests, measure progress and ensure that you're thriving within your strengths while also growing in each season.",
      "A free 30-minute session is always offered to ensure we're the right fit for you! When you are ready to take the next steps, you can schedule incremental sessions or take advantage of up to 25% discount on 3 or 6-session packages.",
      "You'll be working with our coach, Daisy, who has a 12+ year track record of growing individuals in business, non-profit and technology sectors amongst others. She truly cares about each person, takes the time to understand their situation and has dedicated the last 4 years to making herself available to her clients around the globe.",
    ],
  },
  {
    q: "I have a unique project & collaboration request. What do I do?",
    a: [
      "Keenesse coaching & consulting provides a wide array of professional services for businesses, non-profits and individuals. The first step is to schedule a free consultation with Daisy to ensure we're a right fit.",
      "For individuals, the next steps would be to book 1:1 sessions or packages according to the rates on the appointment page. Meanwhile for organizations and businesses, a custom contract would need to be built together. This includes expectations of the service, rates and method of payments, possible mileage or travel fees.",
    ],
  },
  {
    q: "Are there discounts for students?",
    a: [
      "Yes, students get an additional 10% off coaching sessions and packages! Email hello@keenesse.com from your .edu email address to request student discounts.",
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
      <div className="bg-gray w-full p-10 md:p-24 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full md:w-1/2 max-w-[620px] h-[50vw] max-h-[420px]">
          <div className="relative w-full h-full">
            <Image
              src={me}
              alt="Daisy"
              fill
              className="object-cover"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="bg-white p-10 text-blue w-full md:w-1/2 lg:p-20 max-w-[620px]">
          <h3 className="text-4xl mb-5 lg:text-6xl">Hi, I&apos;m Daisy</h3>
          <p className="text-xl mb-3 leading-8">
            I started Keenesse with one goal in mind: to partner with
            individuals and organizations so that they can navigate their work
            and life with finesse.
          </p>
          <p className="text-xl mb-3 leading-8">
            I have a 12+ years track record of growing individuals and building
            projects from the ground up in business, non-profit and technology
            sectors amongst others. I provide consulting services on a wide
            array of areas. To name a few: career development, leadership, small
            business launch and growth, and STEM education.
          </p>
          <p className="text-xl mb-3 leading-8">
            I truly care about each client. I take the time to understand each
            unique situation and I have dedicated Keenesse to making myself
            available to my clients around the globe.
          </p>
          <p className="text-xl mb-3 leading-8">
            Interested?{" "}
            <Link href="/appointments" className="underline">
              Schedule a discovery call!
            </Link>
          </p>
        </div>
      </div>
      <div className="flex bg-blue w-full p-5 items-center flex-wrap justify-center">
        <h3 className="text-4xl text-white text-center my-10 w-full lg:text-6xl">
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
      <div className="bg-gray w-full p-10 md:p-24">
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
