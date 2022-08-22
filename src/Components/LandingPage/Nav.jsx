import React from "react";
import { MenuIcon } from "@heroicons/react/outline";

import logo from "../../assets/images/Discord-Logo.svg";
import { Link } from "react-router-dom";

import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function Nav() {
  const [user] = useAuthState(auth);
  let navigate = useNavigate();

  return (
    <div className=" bg-discord_blue">
      <div className="flex items-center justify-between  h-[10vh] mx-6 md:mx-10">
        <a href="/" className="">
          <img src={logo} alt="logo" className="w-32 h-12 object-contain" />
        </a>
        <div className="hidden lg:flex space-x-9 text-white">
          <a className="link">Download</a>
          <a className="link">Nitro</a>
          <a className="link">Safety</a>
          <a className="link">Support</a>
          <a className="link">Blog</a>
          <a className="link">Careers</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-white rounded-full py-2 px-6 focus:outline-none text-base text-zinc-700 hover:text-discord_blurple hover:shadow-xl transition duration-150">
            <Link
              to={!user ? "login" : "channels"}
              onClick={() => navigate("/channels")}
            >
              {!user ? "Login" : "Open Discord"}
            </Link>
          </button>
          <MenuIcon className="h-8 text-white" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
