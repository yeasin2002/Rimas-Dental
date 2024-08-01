import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

import theethImg from "@/assets/icons/teeths/theeth-blue.svg";
import bannerImg from "@/assets/images/tools.webp";
import { cn } from "@/utils";

interface Props extends React.ComponentProps<"div"> {}

const facilities = [
	"দক্ষ ডেন্টিস্ট",
	"আধুনিক যন্ত্রপাতি",
	"সুবিধাজনক পরিবেশ",
	"অধিকমত পরিষেবা",
	"জরুরি অ্যাপয়েন্টমেন্ট",
];

export const OurStory = (props: Props) => {
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
					<div className="absolute bottom-5 left-0 right-0 mx-auto w-4/5 space-y-3 rounded-xl bg-gray-50 p-4 2xl:text-2xl 2xl:space-y-3">
						<div className="flex items-center gap-x-2 ">
							<CircleCheck className="2xl:size-10" />
							<p>দক্ষ ডেন্টাল সেবা </p>
						</div>
						<div className="flex items-center gap-x-2">
							<CircleCheck className="2xl:size-10" />
							<p>সুবিধা ও সহজতা</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h2 className="mb-4 font-grotesk text-4xl font-bold text-main-400 mini:text-5xl 2xl:text-6xl">
					আপনার দক্ষ ডেন্টাল
				</h2>
				<p className={cn("my-5 text-lg text-main-500 2xl:text-2xl")}>
					প্রতিরক্ষামূলক চিকিৎসা থেকে পুনর্স্থাপন দন্তচিকিৎসা পর্যন্ত, আমাদের দল সম্পূর্ণরূপে আপনার
					জন্য সেরা ডেন্টাল যত্ন প্রদানে মনোনিবেশ করে। একটি সুস্থ হাসি একটি খুশির হাসি - আমরা
					আপনাকে উভয়ই অর্জন করতে সাহায্য করি!
				</p>

				<div className="space-y-2 2xl:space-y-4 2xl:mt-4 ">
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
