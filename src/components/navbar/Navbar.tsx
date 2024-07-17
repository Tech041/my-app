"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../button/Button";
import Icons from "../icons/Icons";
import { CiHome } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { MdClass, MdSportsGymnastics } from "react-icons/md";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
const styles =
  "flex gap-3 justify-start py-3 items-center hover:text-accent-300";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      id: 1,
      title: "Home",
      path: "#hero",
    },
    {
      id: 2,
      title: "Benefits",
      path: "#benefits",
    },
    {
      id: 3,
      title: "Our classes",
      path: "#classes",
    },
    {
      id: 4,
      title: "Contact us",
      path: "#contact-us",
    },
  ];
  return (
    <header className="w-full h-[60px] flex items-center fixed  font-semibold text-purple-500 bg-gray-200 z-50">
      <div className=" container flex justify-between items-center">
        <div>
          <Link href="/#hero">
            <Image
              height={34}
              width={150}
              src="/images/logo/mikegym.svg"
              alt="Logo"
            />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="block md:hidden cursor-pointer z-10"
        >
          {open ? <IoMdClose size={30} /> : <RxHamburgerMenu size={30} />}
        </div>
        <nav
          className={`${
            open ? "right-0" : "right-[-100%]"
          } w-[70%] md:w-auto h-screen md:h-auto px-5 md:px-0 
          pt-20 md:pt-0 absolute md:static top-0 duration-500 ease-in text-primary-400 md:text-primary-500 bg-primary-200 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row gap-5">
            {links.map((link) => (
              <li
                onClick={() => setOpen(false)}
                key={link.id}
                className={`hover:text-accent-300 hidden md:block`}
              >
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <ul className="for-mobile md:hidden">
            <li className={styles} onClick={() => setOpen(false)}>
              <AiFillHome size={30} color="white" />{" "}
              <Link href="/#hero">Home</Link>
            </li>
            <li className={styles} onClick={() => setOpen(false)}>
              <MdSportsGymnastics size={30} color="white" />
              <Link href="/#benefits">Benefits</Link>
            </li>
            <li className={styles} onClick={() => setOpen(false)}>
              <MdClass size={30} color="white" />{" "}
              <Link href="/#classes">Our Classes</Link>
            </li>
            <li className={styles} onClick={() => setOpen(false)}>
              <BsFillTelephoneForwardFill size={30} color="white" />{" "}
              <Link href="#contact-us">Contact Us</Link>
            </li>
          </ul>
          <div className="md:hidden mt-10">
            {" "}
            <Icons />
          </div>
        </nav>
        <div className="hidden md:flex items-center gap-5">
          <Link href="#about-us">About us</Link>
          <Button />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
