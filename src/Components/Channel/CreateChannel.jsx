import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../../features/channelSlice";
import { useNavigate } from "react-router-dom";

const CreateChannel = ({ id, channelName }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const setChannel = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    );
    navigate(`/channels/${id}`);
  };
  return (
    <div
      className="px-4 rounded-md mt-2 py-2 cursor-pointer flex gap-x-3 hover:text-white hover:bg-[#40444b] text-[#8e9297]"
      onClick={setChannel}
    >
      {/* particular Channel section */}
      <span>#</span>
      <h1 className="break-words">{channelName}</h1>
    </div>
  );
};

export default CreateChannel;
