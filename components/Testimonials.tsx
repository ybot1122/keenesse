const testimonials = [
  {
    id: "a",
    from: "Steve",
    message:
      "Just wanted to thank you so much for your help in working on my resume and offering feedback and support. I just accepted a job that I’m excited about and I just wanted to express my gratitude!",
  },
  {
    id: "b",
    message:
      "Thank you so much, Daisy! You gave me really PRACTICAL things I could change!",
    from: "Linda",
  },
  {
    id: "c",
    from: "Aminat",
    message:
      "I had the best time chatting with Daisy during my consultation. I've talked with other coaches but I felt seen and right at home.",
  },
  {
    id: "d",
    message: "Daisy, you are a valuable resource!",
    from: "Mercer Alliance Group",
  },
];

export default function Testimonials() {
  return (
    <div className={"w-[1020px] overflow-x-scroll block whitespace-nowrap"}>
      {testimonials.map((t, ind) => {
        return (
          <div className="inline-block whitespace-normal mx-10" key={t.id}>
            <div className="flex flex-wrap bg-white m-5 text-blue text-center p-5 w-[320px] mx-auto justify-center flex-col">
              <p className="text-2xl w-full">&ldquo;{t.message}&rdquo;</p>
              {t.from ? <p className="mt-5">{t.from}</p> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
