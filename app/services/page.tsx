import Link from "next/link";
import ClickableTile from "./ClickableTile";
import ForIndividualsCarousel from "./ForIndividualsCarousel";
import ForBusinessesCarousel from "./ForBusinessesCarousel";

export default function Services() {
  return (
    <main className="min-h-screen">
      <div className="bg-gray w-full p-10 md:pt-10 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full max-w-[1024px]">
          <h1 className="text-4xl text-center block text-blue">Services</h1>
          <p className="text-center max-w-[725px] text-lg my-5 mx-auto">
            Keenesse offers a wide range of consulting services for individuals
            and businesses. Don&apos;t see what you&apos;re looking for? We also
            customize offerings to match your needs.
          </p>
        </div>
      </div>

      <div className="bg-blue w-full text-white px-5">
        <h2 className="text-center text-4xl pb-5 pt-10">For Individuals</h2>
        <div className="max-w-[725px] mx-auto text-lg">
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

        <div className="w-[90%] pb-20 pt-10 px-15 mx-auto">
          <ForIndividualsCarousel />
        </div>
      </div>

      <div className="bg-gray w-full text-blue px-5">
        <h2 className="text-center text-4xl pb-5 pt-10">For Businesses</h2>
        <div className="max-w-[725px] mx-auto text-lg">
          <p>
            Keenesse develops customized business and technical solutions from
            small businesses to academic institutions, nonprofits and
            corporations.
          </p>
          <p className="mt-5">
            To get started, schedule a free 45 minute business consultation TODO
            LINK or send an inquiry message TODO LINK.
          </p>
        </div>

        <div className="w-[90%] pb-20 pt-10 px-15 mx-auto">
          <ForBusinessesCarousel />
        </div>
      </div>
    </main>
  );
}
