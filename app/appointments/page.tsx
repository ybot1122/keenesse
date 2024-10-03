import Link from "next/link";
import WannaChat from "@/components/WannaChat";
import daisy from "../../public/my-pic.jpeg";
import CoachCard from "@/components/CoachCard";
import dong from "../../public/dong.png";
import Image, { StaticImageData } from "next/image";

export default function Appointments() {
  return (
    <main className="min-h-screen">
      <div className="bg-gray w-full p-10 md:pt-10 md:pb-10 flex justify-center flex-col items-center`">
        <p className="max-w-[720px] mx-auto text-center text-blue text-2xl">
          Thank you for your interest in scheduling a sessions with Keenesse!
        </p>
        <p className="max-w-[720px] mx-auto mt-5 text-center text-blue text-2xl">
          All our coaches offer a free 30 minute consultation, as well as
          individual sessions and packages. Select the coach you are interested
          in booking with.
        </p>
      </div>

      <div className="bg-blue w-full p-10 md:pt-10 md:pb-10 flex justify-center flex-row items-center`">
        <div className="flex flex-col sm:flex-row justify-center items-center text-white text-center">
          <div className="flex flex-col items-center max-w-[725px] text-lg my-5 sm:mx-5">
            <div className="w-[200px] h-[200px] overflow-hidden relative">
              <Link href={"/daisy"}>
                {" "}
                <Image
                  src={daisy}
                  placeholder="blur"
                  alt={"Daisy Isibor"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </div>
            <h2 className="text-3xl underline mt-5">
              <Link href="/daisy">Schedule With Daisy Isibor</Link>
            </h2>
          </div>

          <div className="flex flex-col items-center max-w-[725px] text-lg my-5 sm:mx-5">
            <div className="w-[200px] h-[200px] overflow-hidden relative">
              <Link href={"/dong"}>
                {" "}
                <Image
                  src={dong}
                  placeholder="blur"
                  alt={"Dong Ming"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </div>
            <h2 className="text-3xl underline mt-5">
              <Link href="/dong">Schedule With Dong Ming</Link>
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
