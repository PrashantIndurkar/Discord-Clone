import { TrashIcon } from "@heroicons/react/outline";
import { auth, db } from "../../firebase";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import moment from "moment";
import { useSelector } from "react-redux";
import { selectChannelId } from "../../features/channelSlice";

const Chat = ({ id, message, name, timestamp, photoURL, email }) => {
  // React Hooks
  const [user] = useAuthState(auth);

  // from react-redux
  const channelId = useSelector(selectChannelId);

  return (
    <div className="border-b border-discord_button_bg mt-3 ">
      <div className="flex hover:bg-discord_button_bg p-2 rounded-lg group">
        <img
          src={photoURL}
          className="h-12 w-12 rounded-full overflow-hidden"
        ></img>
        <div className="flex flex-col pl-4 w-full">
          <div className="flex items-center ">
            <h1 className="font-semibold text-sm text-gray-100">{name}</h1>
            <p className="text-xs pl-4 text-gray-400">
              {moment(timestamp?.toDate().getTime()).format("lll")}
            </p>
          </div>
          <p className="text-gray-300">{message}</p>
        </div>
        {user?.email === email && (
          <button className="overflow-hidden flex items-center justify-center w-12 h-10 mr-6">
            <TrashIcon
              className="text-red-400 hidden group-hover:inline hover:text-red-700 h-5 w-5"
              onClick={() =>
                db
                  .collection("channels")
                  .doc(channelId)
                  .collection("messages")
                  .doc(id)
                  .delete()
              }
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Chat;
