import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>
        <Link href="#">
          <Image
            src="/icons8-twitter.svg"
            alt="Twitter"
            width="30"
            height="30"
          />
        </Link>
        <Link href="#">
          <Image
            src="/icons8-linkedin.svg"
            alt="LinkedIn"
            width="30"
            height="30"
          />
        </Link>
        <p>© 2024 Keenesse LLC. All Rights Reserved</p>
      </div>
    </footer>
  );
}
