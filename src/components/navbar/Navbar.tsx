"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "../button/Button";

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
          <Image
            height={34}
            width={150}
            src="/images/logo/mikegym.svg"
            alt="Logo"
          />
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
          pt-20 md:pt-0 absolute md:static top-0 duration-500 ease-in text-white md:text-primary-500 bg-primary-200 md:bg-transparent`}
        >
          <ul className="flex flex-col md:flex-row gap-5">
            {links.map((link) => (
              <li onClick={() => setOpen(false)} key={link.id}>
                <Link href={link.path}>{link.title}</Link>
              </li>
            ))}
          </ul>
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
