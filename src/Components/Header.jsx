import { DownloadIcon } from "@heroicons/react/outline";
import React from "react";

import foregroundLeft from "../assets/images/foregroundLeft.svg";

function Header() {
  return (
    <div className="bg-discord_blue text-white h-[90vh]">
      <div className="pt-16 px-6">
        <h1 className="text-2xl font-black tracking-wider">
          IMAGINE A PLACE...
        </h1>
        <p className="my-6 text-slate-100">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="flex flex-col gap-6 items-start">
          <button className="hero_button bg-white  text-black">
            <DownloadIcon className="h-5 w-5" />{" "}
            <a href="">Download for Linux</a>
          </button>
          <button className="hero_button text-white bg-black">
            <a href="">Open Discord in your browser</a>
          </button>
        </div>
        <div className="flex items-center mt-14">
          <img src={foregroundLeft} alt="" className="-ml-[5rem]" />
        </div>
      </div>
    </div>
  );
}

export default Header;
