import Link from "next/link";

export default function Appointments() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-gray w-full p-10 md:p-24 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full max-w-[1024px]">
          <h1 className="text-4xl text-center block text-blue">
            1:1 Appointments
          </h1>
          <p className="text-center max-w-[625px] text-lg my-5 mx-auto">
            For individuals seeking coaching services, find the option that best
            suites your needs. First time here? Go ahead, schedule a free
            consultation below.{" "}
          </p>
          <p className="text-center max-w-[625px] text-lg mx-auto">
            Returning clients, feel free to schedule incremental sessions or
            take advantage of up to 25% discount on 3 or 6-session packages.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 text-center mt-10">
            <div className="col-span-1 bg-white pb-10">
              <div className="h-[24px] bg-buyAccent" />
              <p className="mt-10 mb-5 text-lg">First Time Only - 30 Minutes</p>
              <h3 className="text-blue text-3xl mb-5">Free Consultation</h3>
              <p className="text-blue text-2xl mb-10">$0</p>
              <Link
                href="https://calendly.com/keenesse/free30min"
                target="_blank"
                className="bg-blue text-white py-3 px-20 font-semibold hover:bg-sendHover"
              >
                Schedule
              </Link>
            </div>
            <div className="col-span-1">Buy</div>
            <div className="col-span-1">Buy</div>
          </div>
        </div>
      </div>
    </main>
  );
}
