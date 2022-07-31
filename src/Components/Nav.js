import React from "react";
import { MenuIcon } from "@heroicons/react/outline";
function Nav() {
	return (
		<div className="flex items-center  justify-between h-[80px] bg-discord_blue pl-6 pr-6">
			<a href="/" className="">
				<img
					src="/images/Discord-Logo.svg"
					alt="logo"
					className="w-32 h-12 object-contain"
				/>
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
				<button className="bg-white rounded-full py-2 px-4 focus:outline-none text-sm">
					Login
				</button>
				<MenuIcon className="h-8 text-white" />
			</div>
		</div>
	);
}

export default Nav;
