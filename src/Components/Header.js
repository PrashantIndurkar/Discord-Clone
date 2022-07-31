import { DownloadIcon } from "@heroicons/react/outline";
import React from "react";

function Header() {
	return (
		<div className="pl-6 h-[89vh] bg-discord_blue">
			<div>
				<h1 className="text-2xl font-extrabold pt-14 pb-6 text-white">
					IMAGINE A PLACE...
				</h1>
				<p className="text-base font-light text-white">
					...where you can belong to a school club, a gaming group, or a
					worldwide art community. Where just you and a handful of friends can
					spend time together. A place that makes it easy to talk every day and
					hang out more often.
				</p>
			</div>
			<div className="flex flex-col snap-start    mt-6 gap-6 items-start">
				<button className="hero_button bg-white hover:text-discord_blurple">
					<DownloadIcon className="w-6 mr-1" />
					Download for Linux
				</button>
				<button className="hero_button bg-discord_button_bg hover:bg-discord_button_bg:[300] text-white">
					Open Discord in your browser
				</button>
			</div>
			<div className="flex items-center mt-14">
				<img src="/images/foregroundLeft.svg" alt="" className="-ml-[5rem]" />
			</div>
		</div>
	);
}

export default Header;
