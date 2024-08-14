import BuyCard from "@/components/BuyCard";
import SingleSessionCard from "@/components/SingleSessionCard";
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
        <SingleSessionCard
          description="First Time Only - 30 Minutes"
          title="Free Consultation"
          href="https://calendly.com/keenesse/free30min"
          indented={true}
          bg="white"
        />
        <SingleSessionCard
          description="Single Session"
          title="30 Minutes"
          price="$109"
          href="https://calendly.com/keenesse/30min"
          indented={false}
          bg="white"
        />
        <SingleSessionCard
          description="Single Session"
          title="60 Minutes"
          price="$219"
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
          title="Starter Package"
          href={
            process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
              ? "https://buy.stripe.com/test_14k7vI4ymfhSgiQeUW"
              : "https://buy.stripe.com/6oE3eL80G74C4bS147"
          }
          indented={true}
          bg="white"
          price="$788"
          priceEntice="$197/session"
          details={[
            "4 x 60 minutes video conferencing",
            "Great for quarterly meetings or short-term collaboration",
            "Unlimited support via email",
          ]}
          highlight={"10% OFF"}
          highlightLevel={1}
          listType="star"
          label="Select"
        />
        <BuyCard
          details={[
            "12 x 60 minutes video conferencing",
            "Perfect for weekly, bi-weekly or monthly deep collaboration",
            "First priority support via email or messaging",
          ]}
          title="Premium Package"
          price="$2,148"
          priceEntice="$179/session"
          href={
            process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
              ? "https://buy.stripe.com/test_14k5nAc0O9Xy0jS004"
              : "https://buy.stripe.com/cN2cPl6WC88GdMs6os"
          }
          indented={false}
          bg="white"
          listType="star"
          bestValue
          label="Select"
        />
        <BuyCard
          details={[
            "12 x 30 minutes video conferencing",
            "Great for weekly, bi-weekly or monthly check-ins",
            "Unlimited support via email or messaging",
          ]}
          title="Lite Package"
          href={
            process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
              ? "https://buy.stripe.com/test_4gwg2e7Ky9Xy3w4eUX"
              : "https://buy.stripe.com/6oE02z80GgFcaAgcMR"
          }
          indented={true}
          bg="white"
          price="$1,128"
          priceEntice="$94/session"
          highlight={"14% OFF"}
          highlightLevel={1}
          listType="star"
          label="Select"
        />
      </div>
    </div>
  );
};
