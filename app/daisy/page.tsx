import Link from "next/link";
import Tabs from "./Tabs";
import WannaChat from "@/components/WannaChat";
import daisy from "../../public/my-pic.jpeg";
import CoachCard from "@/components/CoachCard";
import breadcrumb from "@/public/breadcrumb.svg";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function Daisy() {
  return (
    <main className="min-h-screen">
      <div className="bg-gray w-full p-10 md:pt-10 md:pb-10 flex justify-center flex-wrap md:flex-row-reverse">
        <Breadcrumb />

        <div className="w-full max-w-[1024px]">
          <h1 className="text-4xl text-center block text-blue">
            Schedule with Daisy
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start max-w-[925px] text-lg my-5 mx-auto">
            <CoachCard
              name="Daisy Isibor"
              appointmentsHref="/daisy"
              description="Founder, Coach & Consultant"
              linkedInHref="https://www.linkedin.com/in/daisy-isibor"
              imageSrc={daisy}
            ></CoachCard>

            <div className="mt-0 md:mt-0 md:ml-5">
              <p className="mb-0">Hello, I&apos;m Daisy!</p>
              <p className="mb-0">
                I started Keenesse with one goal in mind: to partner with
                individuals and organizations so that they can navigate their
                work and life with finesse.
              </p>
              <p className="mb-2">
                I have a 12+ years track record of growing individuals and
                building projects from the ground up in business, non-profit and
                technology sectors amongst others. I provide consulting services
                on a wide array of areas. To name a few: career development,
                leadership, small business launch, and STEM education.
              </p>
              <p className="mb-2">
                Interested? Schedule a free discovery call!
              </p>
            </div>
          </div>

          <div className="text-center mt-5 grid grid-cols-2 gap-2 max-w-[620px] mx-auto">
            <Link
              href="#single"
              className="hover-2 text-xl align-middle underline bg-white border border-blue px-5 py-5 flex items-center justify-center flex-col rounded-full hover:bg-blue"
            >
              Browse my Single Sessions
            </Link>
            <Link
              href="#package"
              className="hover-2 text-xl align-middle underline bg-white border border-blue px-5 py-5 flex items-center justify-center flex-col rounded-full hover:bg-blue"
            >
              Browse my Packages
            </Link>
          </div>
        </div>
      </div>
      <Tabs />
      <WannaChat />
    </main>
  );
}
