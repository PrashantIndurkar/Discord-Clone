import React from "react";
import ServerIcons from "./ServerIcons";

const Channel = () => {
  return (
    <div class="flex">
      <div class="w-16 flex-none flex flex-col ">
        <div class="overflow-y-auto">
          <ServerIcons />
        </div>
      </div>
      <div class="flex flex-col min-h-screen h-screen">
        <div class="bg-red-500 flex">
          <div class="bg-red-300 w-56 flex-none"></div>
          <div>Rest of top bar</div>
        </div>
        <div class="flex-1 bg-blue-500 flex overflow-y-hidden">
          <div class="bg-green-300 w-56 flex-none flex flex-col justify-between">
            <div class="overflow-y-auto">Hashtag sidebar.</div>
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
