import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center">
      <div className="mt-10 mb-5">
        <Link
          href="https://twitter.com/keenesse"
          target="_blank"
          className="inline-block pr-5"
        >
          <Image
            src="/icons8-twitter.svg"
            alt="Twitter"
            width="30"
            height="30"
          />
        </Link>
        <Link
          href="http://www.linkedin.com/in/keenesse/"
          target="_blank"
          className="inline-block"
        >
          <Image
            src="/icons8-linkedin.svg"
            alt="LinkedIn"
            width="30"
            height="30"
          />
        </Link>
      </div>
      <p className="mb-5">© 2024 Keenesse LLC. All Rights Reserved</p>
    </footer>
  );
}
