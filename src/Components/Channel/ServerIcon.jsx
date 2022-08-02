import React from "react";
import reactServer from "../../assets/images/servers/reactServer.webp";
const ServerIcon = () => {
  return (
    <button>
      <img
        src={reactServer}
        className="rounded-full hover:transition hover:duration-150 ease-in h-12 w-12 hover:rounded-2xl"
        alt=""
      />
    </button>
  );
};

export default ServerIcon;
