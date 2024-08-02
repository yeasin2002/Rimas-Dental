"use client";
import { LinkTo } from "@/components";
import { cn } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const ShowMatchRoute = ({ ...props }: Props) => {
	const params = usePathname()?.split("/")?.at(-1)?.toLowerCase();

	return (
		<div
			className="mt-6 2xl:mt-10 2xl:mb-4 flex items-center justify-center"
			{...props}
		>
			<LinkTo
				href="/login"
				className={cn(
					"2xl:text-3xl w-1/3 border-b pb-4 text-center font-medium capitalize text-gray-500 dark:border-gray-400 dark:text-gray-300",
					params === "login" &&
						"border-b-2 border-blue-500 dark:border-blue-400",
				)}
			>
				Log In
			</LinkTo>
			<Link
				href="/register"
				className={cn(
					"2xl:text-3xl w-1/3 border-b-2 pb-4 text-center font-medium capitalize text-gray-800 dark:text-white",
					params === "register" &&
						"border-b-2 border-blue-500 dark:border-blue-400",
				)}
			>
				Register
			</Link>
		</div>
	);
};
