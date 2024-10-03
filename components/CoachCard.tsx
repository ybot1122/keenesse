import Link from "next/link";
import Image, { StaticImageData } from "next/image";

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
    <div className="max-w-[725px] text-lg my-2 sm:mx-5">
      <div className="w-[200px] h-[200px] overflow-hidden relative">
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

      </div>
      <div className="mt-2">
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
