import { cn } from "@/utils";
import React from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

interface Props extends React.ComponentProps<"input"> {
	icon: React.ReactNode;
	register: UseFormRegisterReturn;
	error: string | undefined;
	wrapperClassName?: string;
}

export const InputCombo = ({
	icon,
	className,
	register,
	wrapperClassName,
	error,
	...props
}: Props) => {
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
				{...register}
				{...props}
			/>
		</div>
	);
};
