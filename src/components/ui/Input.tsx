import { cn } from "@/utils";
import React, { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends React.ComponentProps<"input"> {
	register: UseFormRegisterReturn;
	errorMsg?: string;
	labelName: string;
	className?: string;
}

export const Input: FC<InputProps> = ({
	register,
	errorMsg,
	labelName,
	className,
	...rest
}) => {
	return (
		<div className="mb-6">
			<label
				htmlFor={labelName}
				className={cn("mb-2 block text-slate-900 dark:text-slate-100 ")}
			>
				{labelName}
			</label>
			<input id={labelName} {...rest} {...register} className={cn(className)} />

			{errorMsg && (
				<p className="mt-1 animate-pulse text-sm text-red-500">{errorMsg}</p>
			)}
		</div>
	);
};
