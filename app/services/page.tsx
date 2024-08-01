import Link from "next/link";
import ClickableTile from "./ClickableTile";

const forIndividuals = [
  "Small Business Planning & Launch",
  "Digital Transformation",
  "Website Design & Development",
  "Product Management",
  "STEM Education & Curriculum development",
  "Non-profit development",
  "Event Speaking",
  "Customized Solutions",
];

export default function Services() {
  return (
    <main className="min-h-screen">
      <div className="bg-gray w-full p-10 md:pt-10 md:pb-20 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full max-w-[1024px]">
          <h1 className="text-4xl text-center block text-blue">Services</h1>
          <p className="text-center max-w-[425px] text-lg my-5 mx-auto">
            Keenesse offers a wide range of consulting services for individuals
            and businesses. Don&apos;t see what you&apos;re looking for? We also
            customize offerings to match your needs.
          </p>
        </div>
      </div>

      <div className="bg-blue w-full text-white">
        <h2 className="text-center text-2xl py-5">For Individuals</h2>
        <div className="max-w-[425px] mx-auto">
          <p>
            From discovering your career path to job searching, transitioning
            roles, growing within your field or starting a new business,
            Keenesse has got you covered.
          </p>
          <p className="mt-5">
            Although we offer specific services, our goal is to partner with you
            as you navigate different phases of your journey.
          </p>
          <p className="mt-5">
            First time here?{" "}
            <Link
              href="https://calendly.com/keenesse/free30min"
              className="underline"
            >
              Book a free consultation
            </Link>
          </p>
        </div>

        <div className="grid grid-cols-4 gap-2 max-w-[1024px] py-5 px-5">
          {forIndividuals.map((i) => (
            <ClickableTile title={i} key={i} />
          ))}
        </div>
      </div>
      <div className="bg-gray w-full mt-5">
        <h2>For Businesses</h2>
        <p>
          Keenesse develops customized business and technical solutions from
          small businesses to academic institutions, nonprofits and
          corporations.
        </p>
        <p>
          To get started, schedule a free 45 minute business consultation TODO
          LINK or send an inquiry message TODO LINK.
        </p>
      </div>
    </main>
  );
}
