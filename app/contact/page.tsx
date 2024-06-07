import Link from "next/link";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="col-span-1 pr-10">
          <h3 className="text-blue text-4xl">Let's Talk</h3>
          <p className="py-10 text-xl">
            Feel free to reach out here or if you prefer, drop an email. If
            you're interested in 1:1 coaching, you can also go ahead and{" "}
            <Link href="/appointments" className="underline text-blue">
              schedule your free consultation.
            </Link>
          </p>
          <p className="pb-10 text-xl">hello@kenesse.com</p>
        </div>

        <div className="col-span-1">
          <form className="grid grid-cols-2 gap-2">
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
              <label htmlFor="Email" className="text-lg">
                Email
              </label>
              <input
                type="email"
                id="Email"
                name="Email"
                className="hover:bg-inputHover mt-1 w-full bg-inputBg block border border-inputBorder focus:border-blue focus:outline-none h-[50px] p-2"
              />
            </div>
            <div className="col-span-2 mt-5">
              <legend className="text-lg">Inquiring About</legend>
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
              <input
                type="submit"
                value="Send"
                className="bg-blue text-white py-5 px-10 mt-5 hover:bg-sendHover cursor-pointer"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
