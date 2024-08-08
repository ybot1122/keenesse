import BuyCard from "@/components/BuyCard";
import Link from "next/link";
import { useState } from "react";

export default function Tabs({}) {
  return (
    <div>
      <Inquiry />
      <Packages />
    </div>
  );
}

const Inquiry = () => {
  return (
    <div className="bg-blue pb-10" id="single">
      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-2 mb-20 max-w-[1024px] mx-auto px-5">
        <div className="col-span-1 md:col-span-3">
          <h1 className="text-white text-4xl pb-5 pt-10" id="inquiry">
            Single Sessions
          </h1>
        </div>
        <BuyCard
          title="Free Consultation"
          href="https://calendly.com/keenesse/free30min"
          indented={true}
          price={"FREE"}
          bg="white"
          details={[
            "30 minutes",
            "Discovery call for the first time only.",
            "Video Conferencing.",
          ]}
        />
        <BuyCard
          title="Single Session - 30mins"
          href="https://calendly.com/keenesse/30min"
          indented={false}
          price="$109"
          bg="white"
          details={[
            "30 minutes",
            "One-time consultation.",
            "Video Conferencing.",
          ]}
        />
        <BuyCard
          title="Single Session - 60mins"
          price="$219"
          details={[
            "60 minutes",
            "One-time consultation.",
            "Video Conferencing.",
          ]}
          href="https://calendly.com/keenesse/60min"
          indented={true}
          bg="white"
        />
      </div>
    </div>
  );
};

const Packages = () => {
  return (
    <div className="bg-gray pb-20" id="package">
      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-2 max-w-[1024px] mx-auto px-5">
        <div className="col-span-1 md:col-span-3">
          <h1 className="text-blue text-4xl pb-5 pt-10" id="packages">
            Packages
          </h1>
          <p className="text-blue mb-5 max-w-[620px] mx-auto text-lg">
            At Keenesse, we offer packages for booking multiple sessions
            upfront. Packages are a great option if you are looking for regular
            check ins and long term support. Check out which package is best for
            you.
          </p>
        </div>
        <BuyCard
          title="Basic Package"
          href={
            process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
              ? "https://buy.stripe.com/test_14k7vI4ymfhSgiQeUW"
              : "tbd"
          }
          indented={true}
          bg="white"
          price="$788 ($197/hr)"
          details={[
            "4 x 60 minutes video conferencing",
            "Great for quarterly meetings or short-term collaboration",
            "Daily access via email",
            "Sessions never expire",
            "Unlimited rescheduling",
          ]}
          highlight={"SAVE 10%"}
          highlightLevel={1}
        />
        <BuyCard
          details={[
            "12 x 60 minutes video conferencing",
            "Perfect for weekly, bi-weekly or monthly deep collaboration",
            "First priority access via email or messaging",
            "Sessions never expire",
            "Unlimited rescheduling",
          ]}
          title="Premium Package"
          price="$2,199 ($179/hr)"
          href={
            process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
              ? "https://buy.stripe.com/test_14k5nAc0O9Xy0jS004"
              : "tbd"
          }
          indented={false}
          bg="white"
          bestValue
        />
        <BuyCard
          details={[
            "12 x 30 minutes video conferencing",
            "Great for weekly, bi-weekly or monthly check-ins",
            "Daily access via email or messaging",
            "Sessions never expire",
            "Unlimited rescheduling",
          ]}
          title="Lite Package"
          href={
            process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
              ? "https://buy.stripe.com/test_4gwg2e7Ky9Xy3w4eUX"
              : "tbd"
          }
          indented={true}
          bg="white"
          price="$1,149 ($189/hr)"
          highlight={"SAVE 12%"}
          highlightLevel={1}
        />
      </div>
    </div>
  );
};
