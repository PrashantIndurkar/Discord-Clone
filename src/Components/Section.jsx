import React from "react";
import SectionContent from "./SectionContent";

import { DownloadIcon } from "@heroicons/react/outline";

import landingImg1 from "../assets/images/landingImg1.svg";
import landingImg2 from "../assets/images/landingImg2.svg";
import landingImg3 from "../assets/images/LandingImg3.svg";

import landingImg4 from "../assets/images/LandingImg4.svg";

function Section() {
  return (
    <div>
      <div>
        <SectionContent
          img={landingImg1}
          h1={"Create an invite-only place where you belong"}
          p={
            "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
          }
        />
        <SectionContent
          img={landingImg2}
          h1={"Where hanging out is easy"}
          p={
            "Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call."
          }
          color={true}
        />
        <SectionContent
          img={landingImg3}
          h1={"From few to a fandom"}
          p={
            "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
          }
        />
      </div>
      <div className="bg-[#f6f6f6] ">
        <div className="mx-6 pt-14">
          <h1 className="text-2xl font-black my-6 tracking-wide">
            RELIABLE TECH FOR STAYING CLOSE
          </h1>
          <p className="text-zinc-600">
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </p>
          <img className="my-8" src={landingImg4} alt="" />

          <h1 className="text-3xl font-bold tracking-wide">
            Ready to start your journey?
          </h1>
          <button className="hero_button bg-discord_purple my-10 text-white">
            <DownloadIcon className="h-5 w-5" />{" "}
            <a href="">Download for Linux</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section;
