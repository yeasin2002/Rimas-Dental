"use client";

import { DevTool } from "@hookform/devtools";

import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

import { Email, InputCombo, PhotoUploaderDND, SelectGender, UpArrow, User } from "@/components";
import { cn } from "@/utils";
import { registerFormFirstStepData } from "@/types";

import femaleDoctor from "@/assets/icons/others/doctor-female.svg";
import maleDoctor from "@/assets/icons/others/doctor-male.svg";

interface Props {
	formReturn: UseFormReturn<registerFormFirstStepData, any, undefined>;
	setIsFirstStep: Dispatch<SetStateAction<boolean>>;
}

export const RegisterFirstStepForm = ({ formReturn, setIsFirstStep }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
		control,
		getValues,
		reset,
	} = formReturn;

	const onSubmit = () => {
		return setIsFirstStep(false);
	};

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
		<form onSubmit={handleSubmit(onSubmit)}>
			<SelectGender
				register={register("gender")}
				selectedValue={getValues("gender")}
				genderList={genderList}
				error={errors.gender?.message}
			/>

			<InputCombo register={register("name")} error={errors.name?.message} icon={<User />} placeholder="Dr. name" />

			<PhotoUploaderDND
				className={cn(
					"mx-auto mt-6 flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-dashed bg-white px-3 py-3 text-center dark:border-gray-600 dark:bg-gray-900",
					{ "border border-red-600": errors.profileImage },
				)}
				onSuccessUpload={(url) => setValue("profileImage", url)}
				register={register("profileImage")}
			>
				<span className="flex items-center">
					<UpArrow />
					<span className="mx-3 text-gray-400">Profile Photo</span>
				</span>

				{watch("profileImage") && (
					<Image
						src={getValues("profileImage")}
						alt="Preview"
						width={100}
						height={100}
						className="aspect-square size-8 rounded-md object-cover"
					/>
				)}
			</PhotoUploaderDND>

			<InputCombo
				register={register("email")}
				error={errors.email?.message}
				icon={<Email />}
				placeholder="Email address"
			/>
			<InputCombo
				register={register("phone")}
				error={errors.phone?.message}
				icon={<Phone className="mx-3 h-6 w-6 text-gray-300 dark:text-gray-500" />}
				placeholder="01***"
			/>

			<InputCombo
				register={register("address")}
				error={errors.address?.message}
				icon={<MapPin className="mx-3 h-6 w-6 text-gray-300 dark:text-gray-500" />}
				placeholder="exp: Dhaka"
			/>

			<button
				className="mt-6 w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
				type="submit"
			>
				{/* {isLoading ? <EosLoading className="mx-auto" /> : "Sign Up"} */}
				Next
			</button>

			<DevTool control={control} />
		</form>
	);
};
