"use client";

import React, { Fragment, useState } from "react";

import femaleDoctor from "@/assets/icons/others/doctor-female.svg";
import maleDoctor from "@/assets/icons/others/doctor-male.svg";
import { CheckCheck } from "lucide-react";
import Image from "next/image";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends React.ComponentProps<"div"> {
	register: UseFormRegisterReturn;
	selectedValue: "male" | "female";
}

export const SelectGender = ({ register, selectedValue, ...props }: Props) => {
	const [selectGender, SetSelectGender] = useState<string>(selectedValue);
	const genderList = [
		{
			name: "male",
			icon: maleDoctor,
		},
		{
			name: "female",
			icon: femaleDoctor,
		},
	];
	return (
		<div
			className={
				"mx-auto w-full mt-6 flex  items-center rounded-lg border-2  bg-white px-3 py-3 text-center dark:border-gray-600 dark:bg-gray-900 "
			}
			{...props}
		>
			<p className="mx-3 text-gray-600">Gender:</p>
			<div className="flex items-center justify-center gap-x-4">
				{genderList.map((gender) => (
					<Fragment key={gender.name}>
						<label
							htmlFor={gender.name}
							className={"cursor-pointer relative"}
							onClick={() => SetSelectGender(gender.name)}
						>
							<Image
								src={gender.icon}
								alt={gender.name}
								width={100}
								height={100}
								className="object-cover aspect-square size-8 rounded-md"
							/>
							{selectGender === gender.name && (
								<CheckCheck className="text-green-600/50 absolute  -bottom-3   left-0 right-0" />
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
