"use client";

import { cn } from "@/utils";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

interface Props extends React.ComponentProps<"input"> {
	icon: React.ReactNode;
	register: UseFormRegisterReturn;
	error: string | undefined;
	wrapperClassName?: string;
}

export const InputComboForPassword = ({
	icon,
	className,
	register,
	wrapperClassName,
	error,
	...props
}: Props) => {
	const [isShow, setIsShow] = useState(false);
	const toggleShowPassword = () => {
		setIsShow((pre) => !pre);
	};
	return (
		<div className={cn("relative mt-4 flex items-center", wrapperClassName)}>
			<span className="absolute">{icon}</span>
			<input
				className={cn(
					"block w-full rounded-lg border bg-white px-10 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300",
					className,
					{
						"border-red-700": error,
					},
				)}
				type={isShow ? "text" : "password"}
				{...props}
				{...register}
			/>
			<button
				onClick={toggleShowPassword}
				className="absolute bottom-0 right-3 top-0 outline-none"
				type="button"
			>
				{isShow ? (
					<EyeOff className="text-gray-600" />
				) : (
					<Eye className="text-gray-600" />
				)}
			</button>
		</div>
	);
};
