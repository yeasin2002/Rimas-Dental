import React from "react";

interface Props extends React.ComponentProps<"div"> {}

export const Hero = (props: Props) => {
	return (
		<main {...props} className="relative h-screen">
			<video
				src={"/videos/work.mp4"}
				autoPlay
				loop
				muted
				className="h-full w-full object-cover"
			/>
			<div className="absolute left-0 top-0 flex h-full w-full flex-col items-center bg-black bg-opacity-50 px-2 pt-32 text-center md:justify-center md:pt-0">
				<h1 className="text-5xl font-semibold text-white md:text-7xl xl:text-8xl">
					Where Smiles Matter
				</h1>
				<p className="mt-4 px-4 text-xl font-semibold text-white md:text-2xl">
					Creating Lasting Impressions, One Smile at a Time
				</p>
			</div>
		</main>
	);
};
