import React from "react";
import Card from "../card/Card";
import Image from "next/image";
import { title } from "process";
import { HiAcademicCap, HiUsers } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import Button from "../button/Button";

const Benefits = () => {
  const cards = [
    {
      id: 1,
      icon: <HiAcademicCap size={25} />,
      title: "Expert And Qualified Trainers",
      desc: `We have best, skilled, and qualified trainers in Mikegym. We have trainers with 
      over 10 years of working, teaching
       and training experience.`,
    },
    {
      id: 2,
      icon: <IoCalendarOutline size={25} />,
      title: "Flexible Workout Time",
      desc: `Mikegym  has one of the best flexible workout time schedule. We provide fitness services for our 
      members, base on their convinient time.`,
    },
    {
      id: 3,
      icon: <HiUsers size={25} />,
      title: "Special Plans And Bonus",
      desc: `We have special plans that allows families to access ourfitness services at cheap and discount prices. 
      We also provide bonuses to our VIP members.`,
    },
  ];
  return (
    <section className="w-full  py-10" id="benefits">
      <div className="container">
        <h2 className="text-2xl font-bold uppercase text-primary-500">
          {`It's`} more than just gym
        </h2>
        <p className=" mt-3 text-primary-300">
          We have the best fitness equipmnets, instructors and we provide
          amazing and <br /> affordable fitness classes for everyone.
        </p>
        <div className="flex md:flex-row flex-col gap-5 mt-5">
          {cards.map((card) => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
            />
          ))}
        </div>
        <div className="mt-14 flex gap-5 flex-col md:flex-row">
          <div className="flex-1 relative min-npm run devh-[300px] ">
            <Image
              fill
              src="/images/benefitsGraphic.png"
              alt="Benefit section image"
              className="object-cover"
            />
          </div>
          <div className="flex-[2] ">
            <h2 className="text-2xl font-bold mb-4 uppercase text-primary-500">
              MILLIONS OF MEMBERS GETTING FIT DAILY
            </h2>
            <p className="w-[85% ] text-primary-300">
              Millions of members around the world always go for workout to have
              good shapes and to improve health status. Regular physical
              activity is one of the most important things you can do for your
              health. Being physically active can improve your brain health,
              help manage weight, reduce the risk of disease, strengthen bones
              and muscles, and improve your ability to do everyday activities.
            </p>
            <div className="mt-6">
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
