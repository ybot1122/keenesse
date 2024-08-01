import BuyCard from "@/components/BuyCard";
import { useState } from "react";

export default function Tabs({}) {
  return (
    <div className="bg-blue pb-20 px-10">
      <Inquiry />
      <Packages />
      <AdHoc />
    </div>
  );
}

const Inquiry = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-2">
      <div className="col-span-1 md:col-span-2">
        <h1 className="text-white text-4xl pb-5 pt-10" id="inquiry">
          Inquiry
        </h1>
      </div>
      <BuyCard
        title="Free Consultation"
        href="https://calendly.com/keenesse/free30min"
        indented={false}
        bg="white"
        details={[
          "30 minutes",
          "Discovery call for the first time only.",
          "Video Conferencing.",
        ]}
      />
      <BuyCard
        details={[
          "45 minutes",
          "Initial Inquiry for business proposals or scheduling meetings for billing via invoice under contract.",
          "Video Conferencing.",
        ]}
        title="Business Consultation"
        href="https://calendly.com/keenesse/30min"
        indented={false}
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
        title="TODO"
        href="https://calendly.com/keenesse/free30min"
        indented={true}
        bg="white"
        details={[
          "Video conferencing weekly for 30 mins",
          "Daily access: coaching and check-ins via email",
          "Automated reminders and billing; cancel anytime",
          "Sessions don't expire, unlimited rescheduling",
        ]}
      />
      <BuyCard
        details={[
          "12 Video conferencing per year for 60 minutes (or 2x 30 mins)",
          "Daily access: coaching and check-ins via email",
          "Automated reminders and billing; cancel anytime",
          "Sessions don't expire, unlimited rescheduling",
        ]}
        title="TODO"
        href="https://calendly.com/keenesse/30min"
        indented={false}
        bg="white"
      />
      <BuyCard
        details={[
          "4 Video conferencing per year for 60 minutes",
          "Daily access: coaching and check-ins via email",
          "Automated reminders and billing; cancel anytime",
          "Sessions don't expire, unlimited rescheduling",
        ]}
        title="TODO"
        href="https://calendly.com/keenesse/30min"
        indented={true}
        bg="white"
      />
    </div>
  );
};

const AdHoc = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-center mt-10 gap-2">
      <div className="col-span-1 md:col-span-2">
        <h1
          className="text-white text-4xl pb-5 pt-10 mt-10 border-t border-gray"
          id="adhoc"
        >
          Ad-Hoc Sessions
        </h1>
      </div>
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
        indented={false}
        bg="white"
      />
    </div>
  );
};
