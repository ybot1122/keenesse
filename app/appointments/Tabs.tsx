"use client";

import BuyCard from "@/components/BuyCard";
import { useState } from "react";

export default function Tabs({}) {
  const [activeTab, setActiveTab] = useState<"inquiry" | "packages" | "adhoc">(
    "inquiry",
  );

  return (
    <div className="bg-blue py-20 px-10">
      <div className="text-center">
        <button
          className="rounded-full border-gray border p-2 m-2 bg-gray"
          onClick={() => setActiveTab("inquiry")}
        >
          Inquiry
        </button>
        <button
          className="rounded-full border-gray border p-2 m-2 bg-gray"
          onClick={() => setActiveTab("packages")}
        >
          Packages
        </button>
        <button
          className="rounded-full border-gray border p-2 m-2 bg-gray"
          onClick={() => setActiveTab("adhoc")}
        >
          Ad-Hoc Sessions
        </button>
      </div>

      {activeTab === "inquiry" && <Inquiry />}
      {activeTab === "packages" && <Packages />}
      {activeTab === "adhoc" && <AdHoc />}
    </div>
  );
}

const Inquiry = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-center mt-10 gap-2">
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
      <BuyCard
        title="30 Minutes"
        href="https://calendly.com/keenesse/free30min"
        indented={true}
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
      <BuyCard
        details={[
          "45 minutes",
          "Initial Inquiry for business proposals or scheduling meetings for billing via invoice under contract.",
          "Video Conferencing.",
        ]}
        title="Business Consultation"
        href="https://calendly.com/keenesse/30min"
        indented={true}
        bg="white"
      />
    </div>
  );
};

const AdHoc = () => {
  return <div>AdHoc</div>;
};
