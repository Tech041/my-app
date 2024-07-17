"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";

const Contact = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputText, setInputText] = useState("");
  const handleSubmit = () => {
    if (username == "") {
      setInputName("Please enter your name!!!");
    } else {
      setInputName("");
    }
    if (email == "") {
      setInputEmail("Please enter your email address!!");
    } else {
      setInputEmail("");
    }
    if (text == "") {
      setInputText("Please send a message to us!!!");
    } else {
      setInputText("");
    }
    if (username && email && text) {
      alert(
        `Hello ${username} your request has been submitted successfully!!!`
      );
      setUserName("");
      setEmail("");
      setText("");
    }
  };

  return (
    <section className="w-full py-10" id="contact-us">
      <div className="container">
        <h2 className="text-2xl font-bold uppercase text-primary-500">
          JOIN NOW TO GET IN SHAPE
        </h2>
        <p className="w-full md:w-[60%] mt-3 text-primary-300">
          Take the first step by contacting our {`customer's`} service. Our
          {`customer's`} service is available 24/7 and we {`can't`} wait to
          welcome you in our fitness center.
        </p>
        <div className="flex md:flex-row flex-col mt-5 gap-10">
          <div className="flex-1">
            <form className="flex flex-col gap-5">
              <p className="text-red-500 py-1">{inputName}</p>
              <input
                type="text"
                placeholder="Name"
                className="px-5 py-2 border-2"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
              <p className="text-red-500 py-1">{inputEmail}</p>
              <input
                type="email"
                placeholder="Email"
                className="px-5 py-2 border-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-red-500 py-1">{inputText}</p>
              <textarea
                placeholder="Message..."
                className="h-[100px] px-5 py-2 border-2 resize-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </form>
            <button
              onClick={handleSubmit}
              type="submit"
              className="font-bold px-7 mt-5 py-2 rounded-full cursor-pointer text-white bg-primary-400 hover:bg-primary-200"
            >
              Submit
            </button>
          </div>
          <div className=" flex-1 bg-primary-200 rounded-[20px] overflow-hidden">
            <div className="w-full h-[250px]  md:h-[400px] relative">
              <Image
                fill
                src="/images/contactGraphic.png"
                alt="contact image"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
