import { cn } from "@/utils";
import React from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

interface Props extends React.ComponentProps<"input"> {
	register: UseFormRegisterReturn;
	error: string | undefined;
	labelName: string;
	wrapperClassName?: string;
}

export const InputComboMax = ({
	className,
	register,
	wrapperClassName,
	error,
	labelName,
	type = "text",
	...props
}: Props) => {
	const { name, ...restRegister } = register;
	return (
		<div className={cn(wrapperClassName)}>
			<label
				className="block mb-2 text-sm text-gray-600 dark:text-gray-200 capitalize"
				htmlFor={name}
			>
				{labelName}
			</label>
			<input
				type={type}
				className={cn(
					"block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40",
					className,
				)}
				name={name}
				{...restRegister}
				{...props}
			/>
		</div>
	);
};
