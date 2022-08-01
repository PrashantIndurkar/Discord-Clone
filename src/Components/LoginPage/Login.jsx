import React from "react";

const Login = () => {
  return (
    <header className="bg-discord_blue text-white h-[100vh] flex justify-center items-center ">
      <div className="bg-[#36393f]  p-10 flex rounded-lg space-x-8">
        <div className="">
          <h1 className="text-center pb-4 text-3xl font-semibold">
            Welcome back!
          </h1>
          <p className="text-center overflow-hidden text-xs mb-4 text-[#b5b4b5]">
            we don't provide Email login use Google login
          </p>
          <div className="my-2 space-y-4">
            <div>
              <label className="text-sm text-[#b5b4b5] font-semibold block">
                EMAIL OR PHONE NUMBER
              </label>
              <input
                className="mt-2 rounded-sm bg-[#202225] outline-none py-1 px-2"
                type="text"
                name=""
                id=""
              />
            </div>
            <div>
              <label className="text-sm text-[#b5b4b5] block font-semibold">
                PASSWORD
              </label>
              <input
                className="mt-2 outline-none rounded-sm bg-[#202225] py-1 px-2"
                type="password"
                name=" "
                id=""
              />
            </div>
          </div>

          <p className="text-[#3aaef2] text-xs overflow-hidden">
            FORGOT YOUR PASSWORD?
          </p>
          <button className="bg-discord_purple w-full rounded-sm py-2 my-4">
            Login
          </button>
          <p className="text-xs overflow-hidden">
            Need an account?{" "}
            <span className="text-[#3aaef2] overflow-hidden">Register</span>
          </p>
        </div>

        <div className="hidden md:flex justify-center items-center flex-col ">
          <h1 className="text-3xl overflow-hidden text-center  font-semibold">
            Quick Login using
          </h1>
          <button className="bg-red-600 font-semibold px-5 py-2 mt-4 rounded-sm">
            Google
          </button>
          <p className="text-xs w-60 mt-4 overflow-hidden text-center">
            Login is provide using Firebase its my implementation its not on
            Discord
          </p>
        </div>
      </div>
    </header>
  );
};

export default Login;
