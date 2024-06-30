import { baloo, TiroBangla400 } from "@/fonts";
import React from "react";

interface Props extends React.ComponentProps<"div"> {}

export const Hero = (props: Props) => {
	return (
		<main {...props} className="relative h-screen">
			<video
				// src={process.cwd() + "/src/assets/videos/work.mp4"}
				src="https://videos.pexels.com/video-files/3024322/3024322-hd_1920_1080_30fps.mp4"
				autoPlay
				loop
				muted
				className="h-full w-full object-cover"
			/>
			<div className="absolute left-0 top-0 flex h-full w-full flex-col items-center bg-black bg-opacity-50 px-2 pt-32 text-center md:justify-center md:pt-0">
				<h1
					className={`font-sans text-3xl font-semibold text-white mini:text-4xl sm:text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl 2xl:leading-tight ${baloo.className}`}
				>
					আপনার দাতের স্বাস্থ্য
					<br />
					আমাদের প্রথম অগ্রাধিকার
				</h1>
				<p
					className={`mt-4 px-4 font-sans text-lg font-semibold text-white md:max-w-4xl md:text-xl lg:text-2xl ${TiroBangla400.className}`}
				>
					উচ্চ মানের ডেন্টাল কেয়ার নিশ্চিত করে উজ্জ্বল, স্বাস্থ্যকর হাসির প্রতিশ্রুতি। আধুনিক
					প্রযুক্তি এবং পেশাদার ডেন্টিস্টদের সমন্বয়ে, সর্বোত্তম সেবা প্রদান করা হয়।
				</p>
			</div>
		</main>
	);
};
