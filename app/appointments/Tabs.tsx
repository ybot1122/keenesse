import BuyCard from "@/components/BuyCard";
import { useState } from "react";

export default function Tabs({}) {
  return (
    <div className="bg-blue pb-20 px-10">
      <Inquiry />
      <Packages />
    </div>
  );
}

const Inquiry = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-2 mb-20">
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
        price="$129"
        bg="white"
        details={[
          "30 minutes",
          "One-time consultation.",
          "Video Conferencing.",
        ]}
      />
      <BuyCard
        title="Single Session - 60mins"
        price="$249"
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
  );
};

const Packages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 text-center mt-10 gap-2">
      <div className="col-span-1 md:col-span-3">
        <h1
          className="text-white text-4xl pb-5 pt-10 border-t border-gray"
          id="packages"
        >
          Packages
        </h1>
      </div>
      <BuyCard
        title="4-Session"
        href={
          process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
            ? "https://buy.stripe.com/test_14k7vI4ymfhSgiQeUW"
            : "tbd"
        }
        indented={true}
        bg="white"
        details={[
          "4 x 60 minutes video conferencing",
          "Daily access and check-ins via email",
          "Unlimited rescheduling",
          "Sessions don't expire",
        ]}
      />
      <BuyCard
        details={[
          "12 x 30 minutes video conferencing",
          "Daily access and check-ins via email",
          "Unlimited rescheduling",
          "Sessions don't expire",
        ]}
        title="12-Session Lite"
        href={
          process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
            ? "https://buy.stripe.com/test_4gwg2e7Ky9Xy3w4eUX"
            : "tbd"
        }
        indented={false}
        bg="white"
      />
      <BuyCard
        details={[
          "12 x 60 minutes video conferencing",
          "Daily access and check-ins via email",
          "Unlimited rescheduling",
          "Sessions don't expire",
        ]}
        title="12-Session"
        href={
          process.env.NEXT_PUBLIC_ENVIRONMENT === "development"
            ? "https://buy.stripe.com/test_14k5nAc0O9Xy0jS004"
            : "tbd"
        }
        indented={true}
        bg="white"
      />
    </div>
  );
};
