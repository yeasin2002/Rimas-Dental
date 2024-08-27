import demoImg from "@/assets/images/teeth-dirty .webp";
import Image from "next/image";
import React from "react";
import { LinkTo } from "../client";
import { ChevronsRight } from "lucide-react";
import { Service } from "@/types";
interface Props extends React.ComponentProps<"div"> {
	data: Service;
}

export const ServiceCard2 = ({ data, ...props }: Props) => {
	return (
		<LinkTo
			href={`/services/${data._id}`}
			className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
			// {...props}
		>
			<Image
				src={data.coverImage || demoImg}
				alt="Root Canal"
				width={300}
				height={200}
				style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
				className="h-48 w-full object-cover"
			/>
			<div className="bg-white p-4 dark:bg-gray-950">
				<h3 className="text-xl font-bold">{data.name}</h3>
				<p className="text-sm text-gray-500 dark:text-gray-400">{data.description}</p>

				<LinkTo
					href={`/services/${data._id}`}
					// className="absolute inset-0 z-10"
					className="mt-4 flex items-center text-main-400"
				>
					Learn more
					<ChevronsRight className="opacity-50" />
					<span className="sr-only">View</span>
				</LinkTo>
			</div>
		</LinkTo>
	);
};
