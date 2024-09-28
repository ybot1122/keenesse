import Link from "next/link";
import Tabs from "./Tabs";
import WannaChat from "@/components/WannaChat";

export default function Appointments() {
  return (
    <main className="min-h-screen">
      <div className="bg-gray w-full p-10 md:pt-10 md:pb-10 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full max-w-[1024px]">
          <h1 className="text-4xl text-center block text-blue">
            Dong&apos;s Page
          </h1>
          <p className="text-center max-w-[725px] text-lg my-5 mx-auto">
            Description
          </p>
        </div>
      </div>
      <Tabs />
    </main>
  );
}
