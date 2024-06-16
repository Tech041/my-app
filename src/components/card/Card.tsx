import React from "react";
import Link from "next/link";

interface Cardprops {
  icon: JSX.Element;
  title: string;
  desc: string;
}

const Card = ({ icon, title, desc }: Cardprops) => {
  return (
    <div className="   flex flex-1 flex-col items-center gap-5 px-5 py-10 border-2 ">
      <div className="w-[40px] h-[40px] rounded-[50%] text-white bg-primary-400 flex justify-center items-center">
        {icon}
      </div>
      <h3 className="font-bold text-primary-300">{title}</h3>
      <p className="text-primary-300 text-center">{desc}</p>
      <Link href="#" className="text-accent-300 underline cursor-pointer">
        Learn More
      </Link>
    </div>
  );
};

export default Card;
