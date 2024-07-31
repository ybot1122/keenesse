"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const NavItem = ({ text, href }: { text: string; href: string }) => {
  return (
    <li className={`group relative md:text-center uppercase text-md`}>
      <Link href={href} className="block p-5">
        {text}
      </Link>
      <span
        className="opacity-0 transition-opacity ease-in duration-300 group-hover:opacity-100 block w-full h-[2px] bg-blue b-0"
        aria-hidden="true"
      ></span>
    </li>
  );
};

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    { text: "About", href: "/about" },
    { text: "Appointments", href: "/appointments" },
    { text: "Services", href: "/services" },
    { text: "Contact", href: "/contact" },
  ];

  const closeCb = useCallback(() => setNavOpen(false), []);

  useEffect(() => {
    if (navOpen) {
      document.addEventListener("click", closeCb);
    } else {
      document.removeEventListener("click", closeCb);
    }
  }, [navOpen, closeCb]);

  return (
    <nav className={``}>
      <div className="flex py-4 mx-auto max-w-screen-lg h-full text-blue">
        <div className="self-center ml-5 flex-grow">
          <Link
            href="/"
            className="text-center inline-block text-2xl md:text-4xl"
          >
            Keenesse
            <br />
            Coaching &amp; Consulting
          </Link>
        </div>

        <div className="md:hidden justify-self-end flex mr-5">
          <button
            className=" rounded-full hover:bg-silver p-2 self-center"
            onClick={(e) => {
              setNavOpen(!navOpen);
            }}
          >
            <Image
              src="/icons8-menu.svg"
              width={25}
              height={25}
              alt={"Navigation Menu"}
            />
          </button>
        </div>

        <div className="flex col-start-2 justify-end">
          <ul
            className={`${!navOpen ? "hidden" : ""} mt-[60px] md:mt-[0px] absolute md:mr-5 md:static max-md:animate-slideIn md:flex w-1/2 md:w-auto z-40 bg-white items-center justify-between md:space-x-4`}
          >
            {navItems.map(({ text, href }) => (
              <NavItem text={text} href={href} key={text} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
