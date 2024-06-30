"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
	Email,
	InputCombo,
	InputComboForPassword,
	Lock,
	PhotoUploaderDND,
	UpArrow,
	User,
} from "@/components";
import toast from "react-hot-toast";
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
	} = useForm<LoginFormData>({
		resolver: zodResolver(registerFormSchema),
	});
	console.log(watch("profileImage"));

	const onSubmit = async (data: LoginFormData) => {
		try {
			console.log("SUCCESS", data);
			toast.success("Success");
		} catch (error) {
			setError("root", {
				message: "Invalid email or password",
			});
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<InputCombo
				register={register("name")}
				error={errors.name?.message}
				icon={<User />}
				placeholder="Dr. name"
			/>

			<PhotoUploaderDND
				className="mx-auto w-full mt-6 flex cursor-pointer items-center rounded-lg border-2 border-dashed bg-white px-3 py-3 text-center dark:border-gray-600 dark:bg-gray-900"
				onSuccessUpload={(url) => setValue("profileImage", url)}
			>
				<UpArrow />
				<span className="mx-3 text-gray-400">Profile Photo</span>
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

			<div className="mt-6">
				<button className="w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
					Sign Up
				</button>
			</div>
		</form>
	);
};

export default Register;
