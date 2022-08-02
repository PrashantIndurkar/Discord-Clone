import React from "react";
import usaFlag from "../../assets/images/nation.png";
import { ChevronDownIcon } from "@heroicons/react/outline";
import logo from "../../assets/images/Discord-Logo.svg";

import { BsTwitter, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#23272a] py-6 text-white">
      <div className="mx-6 md:mx-10">
        <h1 className="text-discord_purple overflow-hidden text-4xl font-black mt-14">
          IMAGINE A PLACE
        </h1>
        <div className="my-6 flex gap-3 align-middle items-center">
          <img src={usaFlag} alt="" className="h-5" />
          <h1>English, USA</h1>
          <ChevronDownIcon className="h-3" />
        </div>
        <div className="mt-6 flex gap-x-6">
          <BsTwitter className="text-2xl" />
          <BsFacebook className="text-2xl" />
          <BsInstagram className="text-2xl" />
          <BsYoutube className="text-2xl" />
        </div>
        <hr className="mt-6 border-discord_purple" />
        <div className="my-6 flex justify-between">
          <a href="/" className="">
            <img src={logo} alt="logo" className="w-32 h-12 object-contain" />
          </a>
          <button className="bg-discord_purple rounded-full py-2 px-6 focus:outline-none text-base text-white hover:bg-discord_blurple hover:shadow-xl transition duration-150">
            Login
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
