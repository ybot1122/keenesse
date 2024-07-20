import BuyCard from "@/components/BuyCard";
import WannaChat from "@/components/WannaChat";
import Link from "next/link";

export default function Appointments() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="bg-gray w-full p-10 md:pt-10 md:pb-20 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full max-w-[1024px]">
          <h1 className="text-4xl text-center block text-blue">
            1:1 Appointments
          </h1>
          <p className="text-center max-w-[625px] text-lg my-5 mx-auto">
            For individuals seeking coaching services, find the option that best
            suites your needs. First time here? Go ahead, schedule a free
            consultation below.
          </p>
          <p className="text-center max-w-[625px] text-lg mx-auto">
            Returning clients, feel free to schedule incremental sessions or
            take advantage of up to 25% discount on 3 or 6-session packages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 text-center mt-10 gap-2">
            <BuyCard
              description="First Time Only - 30 Minutes"
              title="Free Consultation"
              price={"$0"}
              href="https://calendly.com/keenesse/free30min"
              indented={true}
              bg="white"
            />
            <BuyCard
              description="Single Session"
              title="30 Minutes"
              price="$89"
              href="https://calendly.com/keenesse/30min"
              indented={false}
              bg="white"
            />
            <BuyCard
              description="Single Session"
              title="60 Minutes"
              price="$179"
              href="https://calendly.com/keenesse/60min"
              indented={true}
              bg="white"
            />
          </div>
        </div>
      </div>

      <div className="bg-blue w-full p-10 md:pt-10 md:pb-20 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full max-w-[1024px]">
          <h1 className="text-4xl text-center block text-white">
            Accountability Packages
          </h1>
          <p className="text-center max-w-[625px] text-lg my-5 mx-auto text-white">
            I offer accountability packages for weekly or monthly check ins.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 text-center mt-10 gap-2">
            <BuyCard
              description="Weekly Accountability Package"
              title="30 Minutes Every Week"
              price="$89 / week"
              href="https://buy.stripe.com/28o02za8O74C8s8145"
              indented={false}
              bg="white"
            />
            <BuyCard
              description="Monthly Accountability Package"
              title="60 Minutes Every Month"
              price="$179 / Month"
              href="https://buy.stripe.com/3cseXt0yecoW7o44gg"
              indented={false}
              bg="white"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray w-full p-10 md:pt-10 md:pb-20 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full max-w-[1024px]">
          <h1 className="text-4xl text-center block text-blue">
            Packages &amp; Discounts
          </h1>
          <p className="text-center max-w-[625px] text-lg my-5 mx-auto text-blue">
            Students get additional 10% off all services and packages. Email
            hello@keenesse.com from your .edu email address to request student
            discount pricing
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 text-center mt-10 gap-2">
            <BuyCard
              description="10% OFF"
              title="3 - 30 Minute Sessions"
              price="$239"
              href="https://calendly.com/keenesse/3-30-minute-sessions"
              indented={true}
              bg="white"
            />
            <BuyCard
              description="15% OFF"
              title="3 - 60 Minute Sessions"
              price="$449"
              href="https://calendly.com/keenesse/3-60-minute-sessions"
              indented={false}
              bg="white"
            />
            <BuyCard
              description="20% OFF"
              title="6 - 60 Minute Sessions"
              price="$859"
              href="https://calendly.com/keenesse/6-60-minute-sessions"
              indented={true}
              bg="white"
            />
          </div>
        </div>
      </div>

      <div className="bg-blue w-full p-10 md:pt-10 md:pb-20 flex justify-center flex-wrap md:flex-row-reverse">
        <div className="w-full max-w-[1024px]">
          <h1 className="text-4xl text-center block text-white">
            Business &amp; Group Rates
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 text-center mt-10 gap-2">
            <BuyCard
              description="Initial Inquiry or Invoicing - 45 minutes"
              title="Business Consultation"
              href="https://calendly.com/keenesse/business-consultation"
              indented={true}
              bg="white"
            />
            <BuyCard
              description="Event or Speaking Request"
              title="90 Minutes"
              price="$1200 + Travel fees, if applicable"
              href="/contact"
              indented={false}
              bg="white"
              label="Request"
            />
            <BuyCard
              description="Custom Request "
              title="Contract Required"
              href="/contact"
              indented={true}
              bg="white"
              label="Request"
            />
          </div>
        </div>
      </div>

      <WannaChat bg="bg-gray" />
    </main>
  );
}
