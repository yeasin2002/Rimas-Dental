import { cn } from "@/utils";
import React from "react";
import { type UseFormRegisterReturn } from "react-hook-form";

interface Props extends React.ComponentProps<"input"> {
	icon: React.ReactNode;
	register: UseFormRegisterReturn;
	error: string | undefined;
	wrapperClassName?: string;

	labelName?: string;
}

export const InputCombo = ({ icon, className, register, wrapperClassName, error, labelName, ...props }: Props) => {
	return (
		<div>
			{labelName && (
				<label htmlFor={register.name} className="block font-bold text-gray-700">
					{labelName}
				</label>
			)}

			<div className={cn("inputCombo-wrapper", wrapperClassName)}>
				<span className="absolute">{icon}</span>
				<input
					className={cn("inputCombo-field", className, {
						"border-red-700": error,
					})}
					{...register}
					{...props}
				/>
			</div>
		</div>
	);
};
