import demoImg from "@/assets/images/teeth-dirty .webp";
import Image from "next/image";
import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const ServiceCard2 = ({ ...props }: Props) => {
	return (
		<div
			className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
			{...props}
		>
			<a className="absolute inset-0 z-10" href="/blog">
				<span className="sr-only">View</span>
			</a>
			<Image
				src={demoImg}
				alt="Root Canal"
				width={300}
				height={200}
				style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
				className="h-48 w-full object-cover"
			/>
			<div className="bg-white p-4 dark:bg-gray-950">
				<h3 className="text-xl font-bold">Root Canal</h3>
				<p className="text-sm text-gray-500 dark:text-gray-400">
					Relieve pain and restore your {`tooth's`} health.
				</p>
			</div>
		</div>
	);
};
