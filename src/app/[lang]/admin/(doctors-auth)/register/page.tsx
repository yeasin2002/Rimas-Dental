"use client";

import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

import {
	Email,
	InputCombo,
	InputComboForPassword,
	Lock,
	PhotoUploaderDND,
	SelectGender,
	UpArrow,
	UploadingLoop,
	User,
} from "@/components";
import { prisma } from "@/lib";
import { cn } from "@/utils";
import Image from "next/image";
import { registerFormSchema } from "./registerSchema";

type LoginFormData = z.infer<typeof registerFormSchema>;

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isLoading },
		setError,
		setValue,
		watch,
		control,
		getValues,
	} = useForm<LoginFormData>({
		resolver: zodResolver(registerFormSchema),
	});

	const onSubmit = async (data: LoginFormData) => {
		
		try {
			console.table(data);
			toast.success("Success");
		} catch (error) {
			setError("root", {
				message: "Invalid email or password",
			});
		}
	};
	console.log(errors);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<SelectGender
				register={register("gender")}
				selectedValue={getValues("gender")}
			/>

			<InputCombo
				register={register("name")}
				error={errors.name?.message}
				icon={<User />}
				placeholder="Dr. name"
			/>

			<PhotoUploaderDND
				className={cn(
					"mx-auto w-full mt-6 flex cursor-pointer items-center rounded-lg border-2 border-dashed bg-white px-3 py-3 text-center dark:border-gray-600 dark:bg-gray-900 justify-between	",
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
						className="object-cover aspect-square size-8 rounded-md"
					/>
				)}
			</PhotoUploaderDND>

			<InputCombo
				register={register("email")}
				error={errors.email?.message}
				icon={<Email />}
				placeholder="Email address"
			/>

			<InputComboForPassword
				register={register("password")}
				error={errors.password?.message}
				icon={<Lock />}
				placeholder="******"
			/>
			<InputComboForPassword
				register={register("confirmPassword")}
				error={errors.confirmPassword?.message}
				icon={<Lock />}
				placeholder="*******"
			/>

			<button
				className="w-full transform rounded-lg bg-blue-500 px-6 py-3  mt-6 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
				type="submit"
			>
				{isLoading ? <UploadingLoop /> : "Sign Up"}
			</button>

			<DevTool control={control} />
		</form>
	);
};

export default Register;
