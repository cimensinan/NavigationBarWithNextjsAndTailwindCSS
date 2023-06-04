import Image from "next/image";
import React, { useState } from "react";
import Logo from "../public/logo.webp";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMedium,
} from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={Logo}
            width={125}
            height={125}
            alt="Logo"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl">Why Us</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Contact Us
              </li>
            </Link>
            <Link href="/blog">
              <li className="ml-10 uppercase hover:border-b text-xl">Blog</li>
            </Link>
            <Link href="/services">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Our Services
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Why Us
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Contact Us
              </li>
            </Link>
            <Link href="/blog">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Blog
              </li>
            </Link>
            <Link href="/services">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              >
                Our Services
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center">
          <Link href="https://github.com/cimensinan">
            <AiOutlineGithub size={30} className="cursor-pointer" />
          </Link>
          <Link href="https://www.linkedin.com/in/sinancmn/">
            <AiOutlineLinkedin size={30} className="cursor-pointer" />
          </Link>
          <Link href="https://medium.com/@sinancimen">
            <AiOutlineMedium size={30} className="cursor-pointer" />
          </Link>
        </div>
        <Link href="/">
          <Image
            src={Logo}
            width={125}
            height={125}
            alt="Logo"
            className="m-auto cursor-pointer pt-10 "
            priority
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
