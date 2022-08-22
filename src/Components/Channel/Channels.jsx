// React and React-hooks imports
import React, { useRef, useState } from "react";

// REACT FIREBASE HOOKS
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

// FIREBASE IMPORTS
import firebase from "firebase";

// REACT ROUTER DOM
import { Navigate } from "react-router-dom";

// REACT REDUX IMPORT
import { useSelector } from "react-redux";

// LOCAL IMPORTS
import {
  selectChannelId,
  selectChannelName,
} from "../../features/channelSlice";
import CreateChannel from "./CreateChannel";
import Chat from "./Chat";
import { db, auth } from "../../firebase";
import Modal from "../../util/Modal";
import Sidebar from "./Sidebar";

// REACT ICONS
import { IoMdNotificationsOff } from "react-icons/io";
import { AiFillPushpin } from "react-icons/ai";
import { MdPeopleAlt } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import {
  BsFillFileEarmarkFill,
  BsFillEmojiLaughingFill,
  BsHeadphones,
  BsFillMicFill,
} from "react-icons/bs";

// HERO ICONS
import { PlusIcon } from "@heroicons/react/outline";
import {
  SearchIcon,
  ChevronDownIcon,
  HashtagIcon,
  InboxIcon,
} from "@heroicons/react/outline";
import {
  CogIcon,
  QuestionMarkCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/solid";

/* =====================Imports END ======================= */

const Channels = () => {
  // React hooks
  const [showModel, setShowModel] = useState(false);
  const handelClose = () => setShowModel(false);
  const inputRef = useRef("");
  const chatRef = useRef("");

  // This hooks from react-firebase-hooks
  const [user] = useAuthState(auth);
  const [channels] = useCollection(db.collection("channels"));

  // This are the hooks form react-redux
  const channelName = useSelector(selectChannelName);
  const channelId = useSelector(selectChannelId);

  // message Scroll
  const scrollToBottom = () => {
    chatRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // onSubmit send message to firebase using useCollection hook from react-firebase
  const sendMessage = (e) => {
    e.preventDefault();
    if (inputRef.current.value !== "") {
      db.collection("channels").doc(channelId).collection("messages").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: inputRef.current.value,
        name: user?.displayName,
        photoURL: user?.photoURL,
        email: user?.email,
      });
    }
    inputRef.current.value = "";
    console.log(inputRef.current.value);
    scrollToBottom();
  };

  // Get Messages from firebase using useCollection hook from react-firebase
  const [messages] = useCollection(
    channelId &&
      db
        .collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  return (
    <>
      {!user && <Navigate to="/" />}
      <div className="flex">
        <div className="w-20 flex-none flex flex-col ">
          <div className="overflow-y-auto">
            <Sidebar />
          </div>
        </div>
        <div className="flex flex-col min-h-screen h-screen">
          <div className="bg-red-500 flex h-12">
            <div className="bg-[#2f3136] text-[#ebebec] w-60 px-4 cursor-pointer flex-none flex items-center justify-between border-b-2 border-[#222428] ">
              <div className="flex items-center">
                <CogIcon className="h-4 w-4 mr-1" />
                <h1>React Server</h1>
              </div>
              <ChevronDownIcon className="h-6 w-6" />
            </div>
            <div className="flex items-center overflow-y-hidden p-4 text-[#fffefe] bg-[#36393f] w-screen justify-between border-b-2 border-[#222428] ">
              <div className="flex flex-none">
                <div>#</div>
                <div className="font-bold ml-2 text-white">{channelName}</div>
              </div>
              <div className="flex items-center flex-none  cursor-pointer gap-x-4 ">
                <HashtagIcon className="h-5 w-5" />
                <IoMdNotificationsOff className="h-5 w-5" />
                <AiFillPushpin className="h-5 w-5" />
                <MdPeopleAlt className="h-5 w-5" />
                <div className="relative flex items-center">
                  <input
                    type="text"
                    className="w-32 bg-[#202225] pl-2 rounded-md text-[12px] p-1 outline-none"
                    placeholder="Search"
                  />
                  <SearchIcon className="absolute h-4 text-[#9b9ea2] w-4 right-2" />
                </div>
                <InboxIcon className="h-5 w-5" />
                <QuestionMarkCircleIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="flex-1 flex overflow-y-hidden">
            <div className="bg-[#2f3136] 300 w-60 flex-none flex flex-col justify-between ">
              <div className="scrollbar-hide">
                <div className="flex items-center gap-x-1 hover:text-white text-[#8e9297] px-4 mt-4">
                  <span>
                    <ChevronDownIcon className="h-4 w-4" />
                  </span>
                  <div className="flex items-center">
                    <span className="">Create Channels</span>
                    <PlusIcon
                      onClick={() => setShowModel(true)}
                      className="h-5 w-5 ml-4 cursor-pointer"
                    />
                  </div>
                </div>
                <div className="px-4 ">
                  {channels?.docs.map((doc) => (
                    <CreateChannel
                      key={doc.id}
                      id={doc.id}
                      channelName={doc.data().channelName}
                    />
                  ))}
                </div>
              </div>

              {/* Channel Name Model */}
              <Modal visible={showModel} onClose={handelClose} />

              {/* Profile Setting */}
              <div className="bg-[#292b2f] h-12 text-white px-2  overflow-y-hidden">
                <div className="flex items-center justify-between h-full ">
                  <div className="flex gap-x-2 items-center justify-center align-middle">
                    <img
                      src={user?.photoURL}
                      className="h-8 w-8 rounded-full"
                    ></img>
                    <div className="flex flex-col overflow-y-hidden">
                      <h1 className="font-medium text-xs whitespace-nowrap">
                        {user?.displayName.substring(" ")}
                      </h1>
                      <h1 className="text-xs text-zinc-400">
                        # <span>{user?.uid.substring(0, 4)}</span>
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-x-2">
                    <BsHeadphones className="h-4 w-4" />
                    <BsFillMicFill className="h-4 w-4" />
                    <BiLogOutCircle
                      className="h-4 w-4 cursor-pointer"
                      onClick={() => auth.signOut()}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* CHAT SECTION */}
            <div className="flex-1 flex justify-between">
              <div className="bg-[#36393f] flex-1 flex flex-col justify-between">
                {/* chat */}
                <div className="h-full overflow-y-auto w-full px-4 scrollbar-hide">
                  {messages?.docs.map((doc) => {
                    const { message, timestamp, name, photoURL, email } =
                      doc.data();

                    return (
                      <Chat
                        key={doc.id}
                        id={doc.id}
                        message={message}
                        timestamp={timestamp}
                        name={name}
                        email={email}
                        photoURL={photoURL}
                      />
                    );
                  })}

                  <div ref={chatRef} className="pb-24"></div>
                </div>
                {/* input */}
                <div className="mx-4 pb-6 overflow-hidden z-10">
                  <div className="flex items-center bg-[#40444b] z-50 shadow-lg justify-between rounded-md p-2">
                    <div className="flex items-center">
                      <button className="mx-2 ">
                        <PlusCircleIcon className=" h-7 w-7 text-[#b9bbbe]" />
                      </button>
                      <form className="flex flex-1 justify-end  w-screen">
                        <input
                          type="text"
                          className="flex-1 bg-inherit outline-none text-white"
                          placeholder={
                            channelId
                              ? `Message #${channelName}`
                              : "select Channel"
                          }
                          disabled={!channelId}
                          ref={inputRef}
                        />
                        <button hidden type="submit" onClick={sendMessage}>
                          Send
                        </button>
                      </form>
                    </div>
                    <div className="space-x-5 w-1/4 flex">
                      <button>
                        <FaGift className="h-5 w-5 text-[#b9bbbe]" />
                      </button>
                      <button>
                        <BsFillFileEarmarkFill className="h-5 w-5 text-[#b9bbbe]" />
                      </button>
                      <button>
                        <BsFillEmojiLaughingFill className="h-5 w-5 text-[#b9bbbe]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#2f3136] w-60 flex-none overflow-y-auto">
                <h1 className="text-gray-200 mx-3 mt-4">Online Members</h1>
                <div className="flex flex-nowrap gap-x-2 items-center  mx-3 px-2  mt-4 py-1 cursor-pointer hover:bg-[#40444b] hover:rounded-md ">
                  <img
                    src={user?.photoURL}
                    className="h-8 w-8 rounded-full"
                  ></img>
                  <h1 className="font-semibold text-sm text-gray-300 whitespace-wrap">
                    {user?.displayName}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Channels;
