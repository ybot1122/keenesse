import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center my-20 py-5">
      <div className="mt-10 mb-5">
        <Link
          href="https://twitter.com/keenesse"
          target="_blank"
          className="inline-block mr-5"
        >
          <Image
            src="/icons8-twitter.svg"
            alt="Twitter"
            width="25"
            height="25"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/company/keenesse/"
          target="_blank"
          className="inline-block"
        >
          <Image
            src="/icons8-linkedin.svg"
            alt="LinkedIn"
            width="25"
            height="25"
          />
        </Link>
      </div>
      <p className="mb-5">© 2024 Keenesse LLC. All Rights Reserved</p>
      <p className="text-sm">
        <Link href="/termsofservice" className="underline">
          Terms of Service
        </Link>{" "}
        |{" "}
        <Link href="privacypolicy" className="underline">
          Privacy Policy
        </Link>
      </p>
    </footer>
  );
}
