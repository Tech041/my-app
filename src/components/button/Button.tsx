import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <Link
      href="/#contact-us"
      className="font-bold px-10 py-2 rounded-full cursor-pointer text-white bg-primary-400 hover:bg-purple-300"
    >
      Join
    </Link>
  );
};

export default Button;
