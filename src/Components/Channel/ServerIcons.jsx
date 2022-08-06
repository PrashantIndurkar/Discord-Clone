import React from "react";
import discordLogo from "../../assets/images/discord_icon.svg";
import { MdExplore } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineDownload } from "react-icons/hi";
import reactServer from "../../assets/images/servers/reactServer.webp";

const ServerIcons = () => {
  return (
    <nav className="bg-gray-700 min-h-screen h-screen">
      <ul className="text-center flex flex-col items-center py-2 h-full space-y-2">
        <li>
          <a href="">
            <img
              src={discordLogo}
              className="h-12 w-12 rounded-full hover:rounded-xl transition-all duration-200"
              alt=""
            />
          </a>
        </li>
        <hr className="mt-2 border-gray-500 rounded-md w-1/2" />
        <li>
          <a href="">
            <img
              src={reactServer}
              className="h-12 w-12 rounded-full hover:rounded-xl transition-all duration-200"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="">
            <img
              src={reactServer}
              className="h-12 w-12 rounded-full hover:rounded-xl transition-all duration-200"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="">
            <img
              src={reactServer}
              className="h-12 w-12 rounded-full hover:rounded-xl transition-all duration-200"
              alt=""
            />
          </a>
        </li>
        {/* ICONA */}
        <li>
          <a href="">
            <AiOutlinePlus className="h-12 text-[#3ba55d] p-2 w-12 rounded-full bg-[#36393f]  hover:bg-[#3ba55d] hover:text-white hover:rounded-2xl cursor-pointer transition duration-150 ease-in" />
          </a>
        </li>
        <li>
          <a href="">
            <MdExplore className="h-12 text-[#3ba55d] p-2 w-12 rounded-full bg-[#36393f] hover:rounded-2xl hover:bg-[#3ba55d] hover:text-white cursor-pointer transition duration-150 ease-in" />
          </a>
        </li>
        <hr className="mt-2 border-gray-500 rounded-md w-1/2" />
        <li>
          <a href="">
            <HiOutlineDownload className="mt-2 h-12 text-[#3ba55d] p-2 w-12 rounded-full bg-[#36393f]  hover:bg-[#3ba55d] hover:text-white hover:rounded-2xl cursor-pointer transition duration-150 ease-in" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ServerIcons;
