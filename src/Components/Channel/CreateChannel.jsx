import React, { useState } from "react";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/outline";
import Modal from "../../util/Modal";

const CreateChannel = () => {
  const [showModel, setShowModel] = useState(false);
  const handelClose = () => setShowModel(false);
  return (
    <div className="p-4 text-[#8e9297] ">
      {/* particular Channel section */}
      <div className="">
        <div className="flex items-center gap-x-1 hover:text-white">
          <span>
            <ChevronDownIcon className="h-4 w-4" />
          </span>
          <div className="flex items-center">
            <span>Create Channels</span>
            <PlusIcon
              onClick={() => setShowModel(true)}
              className="h-5 w-5 ml-4 cursor-pointer"
            />
          </div>
        </div>
        <ul className="mx-4 my-2 space-y-2">
          <li className="space-x-2 hover:bg-[#40444b] px-2 py-1 rounded-md cursor-pointer">
            <span>#</span>
            <a href="#" className="font-medium text-[#fafafa]">
              Sub name
            </a>
          </li>
          <li className="space-x-2 hover:bg-[#40444b] px-2 py-1 rounded-md cursor-pointer ">
            <span>#</span>
            <a href="#">Sub name</a>
          </li>
          <li className="space-x-2 hover:bg-[#40444b] px-2 py-1 rounded-md cursor-pointer">
            <span>#</span>
            <a href="#" className="font-medium text-[#fafafa]">
              Sub name
            </a>
          </li>
        </ul>
      </div>
      {/* Channel Name Model */}
      <Modal visible={showModel} onClose={handelClose} />
    </div>
  );
};

export default CreateChannel;
