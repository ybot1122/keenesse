import Link from "next/link";
import Tabs from "./Tabs";

export default function Appointments() {
  return (
    <main className="min-h-screen">
      <div className="bg-gray w-full p-10 md:pt-10 md:pb-20 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full max-w-[1024px]">
          <h1 className="text-4xl text-center block text-blue">Appointments</h1>
          <p className="text-center max-w-[425px] text-lg my-5 mx-auto">
            For individuals &amp; businesses seeking consultation services, find
            the option that best suits you.
          </p>
          <p className="text-center max-w-[425px] text-lg mx-auto">
            Don&apos;t see what you&apos;re looking for? We also customize
            offerings to match your needs.{" "}
            <Link href="/contact">Let us know</Link>!.
          </p>
        </div>
      </div>
      <Tabs />
    </main>
  );
}
