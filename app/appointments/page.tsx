import Link from "next/link";
import WannaChat from "@/components/WannaChat";
import Image from "next/image";
import daisy from "../../public/my-pic.jpeg";

export default function Appointments() {
  return (
    <main className="min-h-screen">
      <div className="bg-gray w-full p-10 md:pt-10 md:pb-10 flex justify-center flex-row items-center`">
        <div className="w-full max-w-[1024px] text-lg text-center">
          Schedule With Daisy
        </div>
        <div className="w-full max-w-[1024px] text-lg text-center">
          Schedule With Dong
        </div>
      </div>
      <WannaChat />
    </main>
  );
}
