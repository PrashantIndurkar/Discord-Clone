import React from "react";

import Server from "./Server";
import ServerChannel from "./ServerChannel";
import Chat from "./Chat";

const Channels = () => {
  return (
    <div className="flex">
      <Server />
      <ServerChannel />
      <Chat />
    </div>
  );
};

export default Channels;
