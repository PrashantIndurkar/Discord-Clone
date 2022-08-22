import { DownloadIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

import foregroundLeft from "../../assets/images/foregroundLeft.svg";

import foregroundRight from "../../assets/images/foregroundRight.svg";

function Header() {
  return (
    <div className="bg-discord_blue overflow-hidden text-white h-[90vh]">
      <div className="pt-16  mx-6 md:mx-10 md:w-1/2">
        <h1 className="text-2xl font-black tracking-wider sm:text-4xl overflow-y-hidden md:text-6xl ">
          IMAGINE A PLACE...
        </h1>
        <p className="my-6 text-slate-100 leading-relaxed">
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
        <div className="flex flex-col mt-10 gap-6 items-start">
          <button className="hero_button bg-white  text-black">
            <DownloadIcon className="h-5 w-5" /> <a href="">Download</a>
          </button>
          <button className="hero_button text-white bg-black">
            <Link to="/channels">Open Discord in your browser</Link>
          </button>
        </div>
      </div>
      <div className="flex items-center mt-14 ">
        <img src={foregroundLeft} alt="" className="-ml-[5rem] md:hidden" />
        <img
          src={foregroundRight}
          alt=""
          className="absolute bottom-0 overflow-hidden -right-24"
        />
      </div>
    </div>
  );
}

export default Header;
