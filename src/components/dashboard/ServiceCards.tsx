import Image from "next/image";
import React from "react";
import { Button } from "../ui";
interface Props extends React.ComponentProps<"div"> {}

export const ServiceCards = ({ ...props }: Props) => {
	return (
		<div
			className="relative max-w-2xl overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800"
			{...props}
		>
			<Image
				className="h-64 w-full object-cover"
				src="https://images.unsplash.com/photo-1550439062-609e1531270e"
				alt="Article"
				width={500}
				height={500}
			/>
			<div className="p-6">
				<div>
					<div>
						<a
							href="#"
							className="mt-2 block transform text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-gray-600 hover:underline dark:text-white"
							tabIndex={0}
							role="link"
						>
							I Built A Successful Blog In One Year
						</a>
					</div>
					<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
						parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris
						egestas quam volutpat viverra. In pretium nec senectus erat. Et
						malesuada lobortis.
					</p>
				</div>
				<div className="mt-4">
					<div className="flex items-center">
						<div className="flex items-center">
							<Image
								className="h-10 rounded-full object-cover"
								src="https://images.unsplash.com/photo-1586287011575-a23134f797f9"
								alt="Avatar"
								width={48}
								height={48}
							/>
							<a
								href="#"
								className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
								tabIndex={0}
								role="link"
							>
								Jone Doe
							</a>
						</div>
						<span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
							21 SEP 2015
						</span>
					</div>
				</div>
			</div>
			<span className="absolute right-2 top-2 rounded-3xl border border-red-500 bg-red-600 px-2 py-1 text-white">
				Paused
			</span>
		</div>
	);
};
