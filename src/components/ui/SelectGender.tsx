"use client";

import React, { Fragment, useState } from "react";

import { CheckCheck } from "lucide-react";
import Image from "next/image";
import { UseFormRegisterReturn } from "react-hook-form";
import { cn } from "@/utils";

interface Props extends React.ComponentProps<"div"> {
	error: string | undefined;
	register: UseFormRegisterReturn;
	selectedValue: "male" | "female";
	genderList: {
		name: string;
		icon: any;
	}[];
}

export const SelectGender = ({
	register,
	selectedValue,
	genderList,
	error,
	...props
}: Props) => {
	const [selectGender, SetSelectGender] = useState<string>(selectedValue);

	return (
		<div
			className={cn(
				"mx-auto mt-6 flex w-full items-center rounded-lg border-2 bg-white px-3 py-3 text-center dark:border-gray-600 dark:bg-gray-900",
				{ "border-red-700": error },
			)}
			{...props}
		>
			<p className="mx-3 text-gray-600">Gender:</p>
			<div className="flex items-center justify-center gap-x-4">
				{genderList.map((gender) => (
					<Fragment key={gender.name}>
						<label
							htmlFor={gender.name}
							className={"relative cursor-pointer"}
							onClick={() => SetSelectGender(gender.name)}
						>
							<Image
								src={gender.icon}
								alt={gender.name}
								width={100}
								height={100}
								className="aspect-square size-8 rounded-md object-cover"
							/>
							{selectGender === gender.name && (
								<CheckCheck className="absolute -bottom-3 left-0 right-0 text-green-600/50" />
							)}
						</label>
						<input
							type="radio"
							{...register}
							value={gender.name}
							id={gender.name}
							className="hidden"
						/>
					</Fragment>
				))}
			</div>
		</div>
	);
};
