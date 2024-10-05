import Link from "next/link";
import Tabs from "./Tabs";
import dong from "../../public/dong.png";
import CoachCard from "@/components/CoachCard";
import Breadcrumb from "@/components/Breadcrumb";

export default function Appointments() {
  return (
    <main className="min-h-screen">
      <Breadcrumb coach="Dong" />
      <div className="bg-gray w-full px-10 pt-0 md:pt-0 pb-10 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full max-w-[1024px]">
          <div className="flex flex-col md:flex-row items-center md:items-start max-w-[925px] text-lg mx-auto">
            <CoachCard
              name="Dong Ming"
              appointmentsHref="/dong"
              description="Coach & Consultant"
              linkedInHref="https://www.linkedin.com/in/dongming"
              imageSrc={dong}
            ></CoachCard>

            <div className="mt-0 md:mt-0 md:ml-5">
              <p className="mb-0 text-2xl text-blue font-bold">
                Hi, I&apos;m Dong!
              </p>
              <p className="mb-0">
                I&apos;m an engineering leader with 15+ years of experience
                building world class teams and launching new software products
                at companies like Axon and Microsoft.
              </p>
              <p className="mb-2">
                Throughout my career, I&apos;ve discovered that guiding and
                mentoring others is incredibly rewarding. I fundamentally
                believe the most interesting and challenging problems in any
                organization are people problems - which are coachable!
              </p>
              <p className="mb-2">
                I believe in a direct, results-oriented approach tailored to
                your individual needs.
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
    </main>
  );
}
