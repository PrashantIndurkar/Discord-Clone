import React from "react";
import {
  SearchIcon,
  ChevronDownIcon,
  HashtagIcon,
  InboxIcon,
} from "@heroicons/react/outline";
import { CogIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { IoMdNotificationsOff } from "react-icons/io";
import { AiFillPushpin } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import Sidebar from "./Sidebar";
import ServerChannels from "./ServerChannels";

const Channel = () => {
  return (
    <div class="flex">
      <div class="w-16 flex-none flex flex-col ">
        <div class="overflow-y-auto">
          <Sidebar />
        </div>
      </div>
      <div class="flex flex-col min-h-screen h-screen">
        <div class="bg-red-500 flex h-12">
          <div class="bg-[#2f3136] text-[#ebebec] w-56 px-4 cursor-pointer flex-none flex items-center justify-between">
            <div className="flex items-center">
              <CogIcon className="h-4 w-4 mr-1" />
              <h1>React Server</h1>
            </div>
            <ChevronDownIcon className="h-6 w-6" />
          </div>
          <div className="flex items-center overflow-y-hidden p-4 text-[#fffefe] bg-[#36393f] w-screen justify-between">
            <div className="flex flex-none">
              <div>#</div>
              <div className="font-bold ml-2">Introduction</div>
            </div>
            <div className="flex items-center flex-none  cursor-pointer gap-x-4 ">
              <HashtagIcon className="h-5 w-5" />
              <IoMdNotificationsOff className="h-5 w-5" />
              <AiFillPushpin className="h-5 w-5" />
              <MdPeopleAlt className="h-5 w-5" />
              <div className="relative flex items-center">
                <input
                  type="text"
                  className="w-32 bg-[#202225] rounded-md text-[12px] p-1 outline-none"
                  placeholder="Search"
                />
                <SearchIcon className="absolute h-4 text-[#9b9ea2] w-4 right-2" />
              </div>
              <InboxIcon className="h-5 w-5" />
              <QuestionMarkCircleIcon className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div class="flex-1 bg-blue-500 flex overflow-y-hidden">
          <div class="bg-green-300 w-56 flex-none flex flex-col justify-between">
            <div class="overflow-y-auto">
              <ServerChannels />
            </div>
            <div class="bg-gray-500">Bottom</div>
          </div>
          <div class="bg-green-500 flex-1 flex justify-between">
            <div class="bg-indigo-300 flex-1 flex flex-col justify-between">
              <div class=" overflow-y-auto w-screen">Display chat</div>
              <div class="bg-gray-700">Chat input goes here</div>
            </div>

            <div class="bg-indigo-600 w-48 flex-none overflow-y-auto">
              Users sidebar.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Channel;
