import SingleSessionCard from "@/components/SingleSessionCard";

export default function Tabs({}) {
  return (
    <div>
      <Inquiry />
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
