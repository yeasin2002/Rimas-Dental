import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

import theethImg from "@/assets/icons/teeths/theeth-blue.svg";
import bannerImg from "@/assets/images/tools.jpg";
import { PlayfairDisplay } from "@/fonts";
import { cn } from "@/utils";
import { Roboto } from "next/font/google";

interface Props extends React.ComponentProps<"div"> {}

const facilities = [
	"Expert Dentists",
	"Modern Equipment",
	"Comfortable Environment",
	"Affordable Services",
	"Emergency Appointments",
];

export const roboto = Roboto({
	subsets: ["latin"],
	weight: "400",
});

export const OurStory = (props: Props) => {
	return (
		<section
			{...props}
			className="grid grid-cols-1 gap-y-10 px-2 md:grid-cols-2"
		>
			<div className="mx-auto flex w-full justify-center">
				<div className="relative flex  size-full w-full place-items-center md:size-2/3 ">
					<Image
						src={bannerImg}
						alt="Dental tools"
						width={500}
						height={500}
						className="size-full rounded-lg object-cover object-center"
					/>
					<div className="  absolute bottom-5 left-0  right-0   mx-auto  w-4/5  space-y-3 rounded-xl bg-gray-50 p-4">
						<div className="flex items-center  gap-x-2">
							<CircleCheck />
							<p>Expert Dental Care</p>
						</div>
						<div className="flex items-center  gap-x-2">
							<CircleCheck />
							<p>Comfort and Convenience</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h2 className="mb-4 font-grotesk text-5xl font-bold text-main-400">
					Your Dental Dream Team
				</h2>
				<p
					className={cn(
						" my-5 text-lg text-main-500",
						PlayfairDisplay.className,
					)}
				>
					From preventative care to restorative dentistry, our team is dedicated
					to providing the best possible dental care for you. A healthy smile is
					a happy smile – we help you achieve both!
				</p>

				<div className="space-y-2 ">
					{facilities.map((info) => (
						<div key={info} className="flex items-center gap-x-2">
							<Image src={theethImg} alt="Teeth" width={30} height={30} />
							<p className={cn("text-xl text-main-500", roboto.className)}>
								{info}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
