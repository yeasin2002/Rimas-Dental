import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

import theethImg from "@/assets/icons/teeths/theeth-blue.svg";
import bannerImg from "@/assets/images/tools.webp";
import { cn } from "@/utils";
import { getDictionary } from "@/Internationalization";

interface Props extends React.ComponentProps<"div"> {
	dictionary: any;
}

export const OurStory = ({ dictionary, ...props }: Props) => {
	const facilities = [
		dictionary?.home?.our_story?.facilities1,
		dictionary?.home?.our_story?.facilities2,
		dictionary?.home?.our_story?.facilities3,
		dictionary?.home?.our_story?.facilities4,
		dictionary?.home?.our_story?.facilities5,
	];

	return (
		<section
			{...props}
			className="home_sections-container mt-0 grid grid-cols-1 gap-y-10 md:grid-cols-2"
		>
			<div className="mx-auto flex w-full justify-center">
				<div className="relative flex size-full w-full place-items-center md:size-2/3">
					<Image
						src={bannerImg}
						alt="Dental tools"
						width={500}
						height={500}
						className="size-full rounded-lg object-cover object-center"
						priority
					/>
					<div className="absolute bottom-5 left-0 right-0 mx-auto w-4/5 space-y-3 rounded-xl bg-gray-50 p-4 2xl:space-y-3 2xl:text-2xl">
						<div className="flex items-center gap-x-2">
							<CircleCheck className="2xl:size-10" />
							<p>{dictionary?.home?.our_story?.main_facilities}</p>
						</div>
						<div className="flex items-center gap-x-2">
							<CircleCheck className="2xl:size-10" />
							<p>{dictionary?.home?.our_story?.main_facilities2}</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h2 className="mb-4 font-grotesk text-4xl font-bold text-main-400 mini:text-5xl 2xl:text-6xl">
					{dictionary?.home?.our_story?.mainHeading}
				</h2>
				<p className={cn("my-5 text-lg text-main-500 2xl:text-2xl")}>
					{dictionary?.home?.our_story?.mainDesc}
				</p>

				<div className="space-y-2 2xl:mt-4 2xl:space-y-4">
					{facilities.map((info) => (
						<div key={info} className="flex items-center gap-x-2">
							<Image src={theethImg} alt="Teeth" width={30} height={30} />
							<p className={cn("text-xl text-main-500 2xl:text-3xl")}>{info}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
