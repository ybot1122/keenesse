import Link from "next/link";
import Tabs from "./Tabs";

export default function Appointments() {
  return (
    <main className="min-h-screen">
      <div className="bg-gray w-full p-10 md:pt-10 md:pb-10 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full max-w-[1024px]">
          <h1 className="text-4xl text-center block text-blue">Appointments</h1>
          <p className="text-center max-w-[725px] text-lg my-5 mx-auto">
            For individuals &amp; businesses seeking consultation services, find
            the option that best suits you.
          </p>
          <p className="text-center max-w-[725px] text-lg mx-auto">
            Don&apos;t see what you&apos;re looking for? We also customize
            offerings to match your needs.{" "}
            <Link href="/contact" className="text-underline">
              Let us know
            </Link>
            !
          </p>
          <div className="text-center mt-5 grid grid-cols-2 gap-2 max-w-[620px] mx-auto">
            <Link
              href="#single"
              className="hover-2 text-xl align-middle underline bg-white border border-blue py-5 flex items-center justify-center flex-col rounded-full hover:bg-blue"
            >
              Browse our Single Sessions
            </Link>
            <Link
              href="#package"
              className="hover-2 text-xl align-middle underline bg-white border border-blue py-5 flex items-center justify-center flex-col rounded-full hover:bg-blue"
            >
              Browse our Packages
            </Link>
          </div>
        </div>
      </div>
      <Tabs />
    </main>
  );
}
