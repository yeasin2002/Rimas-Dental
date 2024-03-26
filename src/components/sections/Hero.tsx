import React from "react";
import { AppointmentForm } from "./AppointmentForm";

interface Props extends React.ComponentProps<"div"> {}

export const Hero = (props: Props) => {
	return (
		<main className="h-screen">
			<div {...props} className="relative">
				<video
					src={"/videos/dentistry.mp4"}
					autoPlay
					loop
					muted
					className="h-full w-full object-cover"
				/>
				<div className="absolute left-0 top-0 h-full w-full bg-black bg-opacity-50"></div>
			</div>

			<AppointmentForm className="mx-auto  min-h-10  w-2/3 -translate-y-52   rounded-sm  " />
		</main>
	);
};


