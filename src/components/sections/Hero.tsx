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
			<div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50"></div>
		</main>
	);
};
