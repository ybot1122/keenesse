import { useFormStatus } from "react-dom";
import { ContactFormState } from "./contactFormAction";
import Image from "next/image";

export default function ContactForm({
  message,
}: {
  message: ContactFormState["message"];
}) {
  return (
    <>
      <div className="col-span-1">
        <label htmlFor="firstName" className="text-lg">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          className="hover:bg-inputHover bg-inputBg w-full block border border-inputBorder focus:border-blue focus:outline-none h-[50px] p-2 mt-1"
        />
      </div>
      <div className="col-span-1">
        <label htmlFor="lastName" className="text-lg">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="hover:bg-inputHover mt-1 w-full bg-inputBg block border border-inputBorder focus:border-blue focus:outline-none h-[50px] p-2"
        />
      </div>
      <div className="col-span-2 mt-5">
        <label htmlFor="email" className="text-lg">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="hover:bg-inputHover mt-1 w-full bg-inputBg block border border-inputBorder focus:border-blue focus:outline-none h-[50px] p-2"
        />
      </div>
      <div className="col-span-2 mt-5">
        <legend className="text-lg">
          Inquiring About{" "}
          <span className="text-inputRequired">(select at least one)</span>
        </legend>
        <label className="cursor-pointer block my-5">
          <input
            type="checkbox"
            name="coachingServices"
            className="w-[16px] h-[16px] mr-5 border border-inputBurder bg-inputBg"
          />
          Coaching Services
        </label>
        <label className="cursor-pointer block mb-5">
          <input
            type="checkbox"
            name="techConsulting"
            className="w-[16px] h-[16px] mr-5 border border-inputBurder bg-inputBg"
          />
          Tech Consulting
        </label>
        <label className="cursor-pointer block mb-5">
          <input
            type="checkbox"
            name="speakingRequest"
            className="w-[16px] h-[16px] mr-5 border border-inputBurder bg-inputBg"
          />
          Speaking Request
        </label>

        <label className="cursor-pointer block mb-5">
          <input
            type="checkbox"
            name="collaborations"
            className="w-[16px] h-[16px] mr-5 border border-inputBurder bg-inputBg"
          />
          Collaborations
        </label>

        <label className="cursor-pointer block">
          <input
            type="checkbox"
            name="corporateEvents"
            className="w-[16px] h-[16px] mr-5 border border-inputBurder bg-inputBg"
          />
          Corporate Events
        </label>
      </div>
      <div className="col-span-2 mt-5">
        <label htmlFor="message" className="text-lg">
          Message
        </label>
        <textarea
          wrap="soft"
          id="message"
          name="message"
          className="hover:bg-inputHover mt-1 w-full bg-inputBg block border border-inputBorder focus:border-blue focus:outline-none h-[100px] p-2"
        />
      </div>

      <div className="col-span-2">
        <SubmitButton message={message} />
      </div>
    </>
  );
}

const SubmitButton = ({
  message,
}: {
  message: ContactFormState["message"];
}) => {
  const { pending } = useFormStatus();

  return (
    <>
      <input
        type="submit"
        value={pending ? "Sending..." : "Send"}
        className="bg-blue text-white py-5 px-10 mt-5 hover:bg-sendHover cursor-pointer"
        disabled={pending}
      />
      {message && (
        <div>
          <p className="bg-errorBg text-white mt-1 p-2 inline-block text-sm">
            {message}
          </p>
        </div>
      )}
    </>
  );
};
