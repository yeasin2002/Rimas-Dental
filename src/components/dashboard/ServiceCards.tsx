import { Service } from "@/types";
import { cn } from "@/utils";
import { getFormattedDate } from "@/utils/formateDates";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props extends React.ComponentProps<"div"> {
	data: Service;
}

export const ServiceCards = ({ data, className, ...props }: Props) => {
	return (
		<div
			{...props}
			className={cn("relative max-w-2xl overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800", className)}
		>
			<Link href={`/services/${data._id}`}>
				<Image className="h-64 w-full object-cover" src={data.coverImage} alt="Article" width={500} height={500} />
			</Link>
			<div className="p-6">
				<Link href={`/services/${data._id}`}>
					<div>
						<h2 className="mt-2 block transform text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-gray-600 hover:underline dark:text-white">
							{data.name}
						</h2>
						<p className="text-xs text-gray-600 dark:text-gray-300">{getFormattedDate(data?.createdAt)}</p>
					</div>
					<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{data.description}</p>
				</Link>
				<div className="mt-4">
					<div className="flex items-center">
						<Image
							className="h-10 rounded-full object-cover"
							src={data?.doctorsId?.profileImage}
							alt="Avatar"
							width={48}
							height={48}
						/>
						<a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex={0} role="link">
							{data?.doctorsId?.name}
						</a>
					</div>
				</div>
			</div>
			{data.isPaused && (
				<span className="absolute right-2 top-2 rounded-3xl border border-red-500 bg-red-600 px-2 py-1 text-white">
					Paused
				</span>
			)}
		</div>
	);
};
