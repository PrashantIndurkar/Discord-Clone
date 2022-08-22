import React, { useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { db } from "../firebase";

const Modal = ({ visible, onClose }) => {
  const [channelName, setChannelName] = useState();
  const inputValue = (e) => {
    setChannelName(e.target.value);
  };

  const handelAddChannel = (e) => {
    e.preventDefault();
    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
    onClose();
  };
  // show the Popup
  const handelOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;

  return (
    <form
      onClick={handelOnClose}
      id="container"
      className="fixed inset-0 bg-opacity-70 bg-[#080809] flex items-center justify-center"
    >
      <div className="bg-[#36393f] rounded-xl  h-min">
        <div className="p-6  text-[#e3e4e5]">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl overflow-hidden font-semibold">
              Create Channel
            </h1>
            <XIcon
              onClick={onClose}
              className="h-8  w-8 text-[#6d6f74] cursor-pointer"
            />
          </div>
          <h2 className="mt-10 font-medium">CHANNEL NAME</h2>
          <input
            type="text"
            className="bg-[#202225] mt-4 text-gray-300 outline-none p-3 rounded-md"
            placeholder="new channel name"
            onChange={inputValue}
          />
        </div>
        <div className="flex bg-[#2f3136] text-[#e3e4e5] mt-6 justify-between p-6">
          <button className="hover:underline" onClick={onClose}>
            Cancel
          </button>
          {channelName === "" ? (
            <button
              disabled
              className="bg-[#434a94] font-medium rounded-md py-2.5 px-2.5 cursor-not-allowed"
              onClick={handelAddChannel}
            >
              Create Channel
            </button>
          ) : (
            <button
              className="bg-[#5865f2] hover:bg-[#4953c6] transition-all duration-150 font-medium rounded-md py-2.5 px-2.5"
              onClick={handelAddChannel}
            >
              Create Channel
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Modal;
