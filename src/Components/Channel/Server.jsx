import React from "react";
import discordLogo from "../../assets/images/Discord-Logo-White.svg";
import { MdExplore } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import ServerIcon from "./ServerIcon";
import { HiOutlineDownload } from "react-icons/hi";

const Server = () => {
  return (
    <nav className="bg-[#202225] h-[100vh] w-[9vh] pt-2 flex flex-col items-center">
      <button className="bg-discord_purple p-3 rounded-2xl">
        <img src={discordLogo} className="h-6 w-6" alt="" />
      </button>
      <hr className="mt-2 border-[#34383d] bg-[#34383d] rounded-md border-1 w-1/2" />

      <div className="flex flex-col items-center space-y-2 mt-2 mb-4">
        {/* SERVERS ICONS */}
        <ServerIcon />
        <ServerIcon />
      </div>
      <div className="space-y-2">
        <AiOutlinePlus className="h-12 text-[#3ba55d] p-2 w-12 rounded-full bg-[#36393f]  hover:bg-[#3ba55d] hover:text-white hover:rounded-2xl cursor-pointer transition duration-150 ease-in" />
        <MdExplore className="h-12 text-[#3ba55d] p-2 w-12 rounded-full bg-[#36393f] hover:rounded-2xl hover:bg-[#3ba55d] hover:text-white cursor-pointer transition duration-150 ease-in" />
      </div>
      <hr className="mt-2 border-[#34383d] bg-[#34383d] rounded-md border-1 w-1/2" />
      <HiOutlineDownload className="mt-2 h-12 text-[#3ba55d] p-2 w-12 rounded-full bg-[#36393f]  hover:bg-[#3ba55d] hover:text-white hover:rounded-2xl cursor-pointer transition duration-150 ease-in" />
    </nav>
  );
};

export default Server;
