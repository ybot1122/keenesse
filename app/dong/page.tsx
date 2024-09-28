import Link from "next/link";
import Tabs from "./Tabs";
import Image from "next/image";
import dong from "../../public/dong.png";

export default function Appointments() {
  return (
    <main className="min-h-screen">
      <div className="bg-gray w-full p-10 md:pt-10 md:pb-10 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full max-w-[1024px]">
          <h1 className="text-4xl text-center block text-blue">
            Schedule with Dong
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start max-w-[725px] text-lg my-5 mx-auto">
            <Image
              src={dong}
              placeholder="blur"
              alt="Keenesse Coach Dong"
              style={{
                width: "150px",
                height: "150px",
              }}
            />
            <div className="mt-5 md:mt-0 md:ml-5">
              <p className="mb-2">Hi, I&apos;m Dong!</p>
              <p className="mb-2">
                I&apos;m an engineering leader with 15+ years of experience
                building world class teams and launching new software products
                at companies like Axon and Microsoft.
              </p>
              <p className="mb-2">
                Throughout my career, I've discovered that guiding and mentoring
                others is incredibly rewarding. I fundamentally believe the most
                interesting and challenging problems in any organization are
                people problems - which are coachable!
              </p>
              <div className="mb-2">
                <p className="mb-2">As your coach, I can help you:</p>
                <ul className="list-disc ml-10">
                  <li>
                    Build stronger relationships with colleagues and your
                    manager
                  </li>
                  <li>Master leadership and people management skills</li>
                  <li>Develop strategies to earn your next promotion</li>
                </ul>
              </div>
              <p className="mb-2">
                I believe in a direct, results-oriented approach tailored to
                your individual needs.
              </p>
              <p className="mb-2">Interested? Schedule a discovery call!</p>
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
