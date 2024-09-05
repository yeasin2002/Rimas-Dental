"use client";

import { DevTool } from "@hookform/devtools";

import { BriefcaseBusiness, BriefcaseMedical, Phone } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { UseFormReturn } from "react-hook-form";

import {
	Email,
	EosLoading,
	FacebookLogo,
	InputCombo,
	InputComboForPassword,
	InputComboTextArea,
	Lock,
	User,
} from "@/components";
import { registerFormSecondStepData } from "@/types";

interface Props {
	formReturn: UseFormReturn<registerFormSecondStepData, any, undefined>;
	setIsFirstStep: Dispatch<SetStateAction<boolean>>;
	onSave: (data: registerFormSecondStepData) => void;
	isLoading: boolean;
}

export const RegisterSecondStepForm = ({ formReturn, setIsFirstStep, onSave, isLoading }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = formReturn;

	const onSubmit = (data: registerFormSecondStepData) => {
		return onSave(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<div className="pb-2">
				<div className="flex gap-x-1 py-2">
					<FacebookLogo className="size-6" />
					<p>Facebook Profile </p>
				</div>

				<div>
					<InputCombo
						register={register("facebookName")}
						error={errors.facebookName?.message}
						icon={<User />}
						placeholder="Facebook Profile Name"
						wrapperClassName="mt-0"
					/>
					<InputCombo
						register={register("facebookLink")}
						error={errors.facebookLink?.message}
						icon={<Email />}
						placeholder="https://www.facebook.com/........."
						wrapperClassName="mt-2"
					/>
				</div>
			</div>
			<InputCombo
				register={register("specialization")}
				error={errors.specialization?.message}
				icon={<BriefcaseMedical className="mx-3 h-6 w-6 text-gray-300 dark:text-gray-500" />}
				placeholder="specialization - exp: Oral Surgeon"
			/>

			<InputCombo
				register={register("yearsOfExperience")}
				error={errors.yearsOfExperience?.message}
				icon={<BriefcaseBusiness className="mx-3 h-6 w-6 text-gray-300 dark:text-gray-500" />}
				placeholder="year of experience"
				aria-label="year of experience"
			/>

			<InputComboTextArea register={register("bio")} error={errors.bio?.message} placeholder="provide your bio" />

			<InputComboForPassword
				register={register("password")}
				error={errors.password?.message}
				icon={<Lock />}
				placeholder="password"
			/>

			<div className="flex items-center justify-center gap-x-2">
				<button
					className="mt-6 transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
					type="button"
					onClick={() => setIsFirstStep(true)}
				>
					Back
				</button>

				<button
					className="mt-6 w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
					type="submit"
				>
					{isLoading ? <EosLoading className="mx-auto" /> : "Submit"}
				</button>
			</div>
			<DevTool control={control} />
		</form>
	);
};
