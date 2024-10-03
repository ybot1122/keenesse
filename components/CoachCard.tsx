import Link from "next/link";
import WannaChat from "@/components/WannaChat";
import Image, { StaticImageData } from "next/image";
import daisy from "../../public/my-pic.jpeg";

export default function CoachCard({
  name,
  imageSrc,
  appointmentsHref,
  linkedInHref,
  description,
}: {
  name: string;
  imageSrc: StaticImageData;
  appointmentsHref: string;
  linkedInHref: string;
  description: string;
}) {
  return (
    <div className="max-w-[725px] text-lg my-5 sm:mr-5">
      <div className="w-[200px] h-[200px] overflow-hidden relative">
        <Link href={appointmentsHref}>
          {" "}
          <Image
            src={imageSrc}
            placeholder="blur"
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Link>
      </div>

      <div className="mt-2">
        <Link href={appointmentsHref} className="underline">
          {name}
        </Link>
        <p className="mb-2">{description}</p>
        <Link href={linkedInHref} target="_blank" className="inline-block">
          <Image
            src="/icons8-linkedin.svg"
            alt="LinkedIn"
            width="25"
            height="25"
          />
        </Link>
      </div>
    </div>
  );
}
