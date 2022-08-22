import React from "react";

const Layout = () => {
  return (
    <div className="bg-slate-300 h-screen flex overflow-hidden">
      <div className="w-16">logo</div>
      <div className="flex flex-col">
        <div className="flex w-screen">
          <div className="bg-red-400 w-60 flex-none overflow-hidden">
            tailwindcss
          </div>
          <div className="bg-red-500 w-full overflow-hidden">#general</div>
        </div>
        <div className="flex w-screen h-screen">
          <div className="bg-blue-300 w-60 flex-none flex flex-col justify-between">
            <div className="">Channel</div>
            <div className="bg-green-500 overflow-hidden h-12">Profile</div>
          </div>
          <div className="bg-blue-600 flex flex-col justify-between">
            <div className="flex-1">lorem </div>
            <div className="h-20 m-5 bg-amber-100">Enter Bar</div>
          </div>
          <div className="bg-zinc-500 w-60 flex-none">Members</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
