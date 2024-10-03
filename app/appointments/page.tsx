import Link from "next/link";
import daisy from "../../public/my-pic.jpeg";
import dong from "../../public/dong.png";
import Image, { StaticImageData } from "next/image";

export default function Appointments() {
  return (
    <main className="min-h-screen">
      <div className="bg-gray w-full p-10 md:pt-10 md:pb-10 flex justify-center flex-col items-center`">
      <h1 className="text-4xl text-center block text-blue">Appointments</h1>
        <p className="text-center max-w-[725px] text-lg my-5 mx-auto">
          Thank you for your interest in working with Keenesse!
        </p>
        <p className="text-center max-w-[825px] text-lg mx-auto">
        Please select the consultant you would like to work with. New here? Get started with{" "}
            <Link href="https://calendly.com/keenesse/free30min" className="text-underline">
            a free 30 minute consultation.
            </Link>
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
                  alt={"Daisy"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </div>
            <h2 className="text-3xl underline mt-5">
              <Link href="/daisy">Schedule with Daisy</Link>
            </h2>
          </div>

          <div className="flex flex-col items-center max-w-[725px] text-lg my-5 sm:mx-5">
            <div className="w-[200px] h-[200px] overflow-hidden relative">
              <Link href={"/dong"}>
                {" "}
                <Image
                  src={dong}
                  placeholder="blur"
                  alt={"Dong"}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </div>
            <h2 className="text-3xl underline mt-5">
              <Link href="/dong">Schedule with Dong</Link>
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
