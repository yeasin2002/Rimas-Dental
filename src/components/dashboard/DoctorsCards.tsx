import { Mail, MapPin, SquareUser } from "lucide-react";
import Image from "next/image";
import React from "react";

import femaleDoctor from "@/assets/icons/others/doctor-female.svg";
import maleDoctor from "@/assets/icons/others/doctor-male.svg";

import { cn } from "@/utils";
import { Doctor } from "@/types";

interface Props extends React.ComponentProps<"div"> {
	imageClassName?: string;
	data: Doctor;
}

export const DoctorsCards = ({ imageClassName, className, data, ...props }: Props) => {
	if (!data) return "";
	return (
		<div
			className={cn("w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800", className)}
			{...props}
		>
			<Image
				className={cn("aspect-square h-56 w-full rounded-lg object-cover object-center", imageClassName)}
				src={data?.profileImage}
				alt="Doctor"
				width={500}
				height={500}
			/>

			<div className="px-6 py-4">
				<div className="flex items-center gap-x-1 text-xl font-semibold text-gray-800 dark:text-white">
					<Image alt="Doctor" width={30} height={30} src={data.gender === "male" ? maleDoctor : femaleDoctor} />
					<h4> {data?.name} </h4>
				</div>
				<p className="py-2 text-gray-700 dark:text-gray-400">{data?.bio}</p>
				<div className="mt-4 flex items-center text-gray-700 dark:text-gray-200">
					<SquareUser />
					<h1 className="px-2 text-sm">{data.phone}</h1>
				</div>
				{data.address && (
					<div className="mt-4 flex items-center text-gray-700 dark:text-gray-200">
						<MapPin />
						<h1 className="px-2 text-sm">{data?.address} </h1>
					</div>
				)}

				<div className="mt-4 flex items-center text-gray-700 dark:text-gray-200">
					<Mail />
					<h1 className="px-2 text-sm">{data?.email}</h1>
				</div>
			</div>
		</div>
	);
};
