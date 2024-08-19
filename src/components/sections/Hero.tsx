"use server";

import { baloo, TiroBangla400 } from "@/fonts";
import { getDictionary } from "@/Internationalization";
import React from "react";

interface Props extends React.ComponentProps<"div"> {
	dictionary: any;
}

export const Hero = async ({ dictionary, ...props }: Props) => {
	return (
		<main {...props} className="relative h-screen">
			<video
				src="https://videos.pexels.com/video-files/3024322/3024322-hd_1920_1080_30fps.mp4"
				autoPlay
				loop
				muted
				className="h-full w-full object-cover"
			/>
			<div className="absolute left-0 top-0 flex h-full w-full flex-col items-center bg-black bg-opacity-50 px-2 pt-32 text-center md:justify-center md:pt-0">
				<h1
					className={`font-sans text-3xl font-semibold capitalize text-white mini:text-4xl sm:text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl 2xl:leading-tight ${baloo.className}`}
				>
					{dictionary?.home?.hero?.main1}
					<br />
					{dictionary?.home?.hero?.main2}
				</h1>
				<p
					className={`mt-4 px-4 font-sans text-lg font-semibold text-white md:max-w-4xl md:text-xl lg:text-2xl ${TiroBangla400.className}`}
				>
					{dictionary?.home?.hero?.desc}
				</p>
			</div>
		</main>
	);
};
