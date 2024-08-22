"use client";

import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";

import femaleDoctor from "@/assets/icons/others/doctor-female.svg";
import maleDoctor from "@/assets/icons/others/doctor-male.svg";

import {
	Email,
	EosLoading,
	InputCombo,
	InputComboForPassword,
	Lock,
	PhotoUploaderDND,
	SelectGender,
	UpArrow,
	User,
} from "@/components";
import { registerFormSchema } from "@/schema";
import { cn } from "@/utils";
import { registerFormData } from "@/types";
import { loginWithAuthJs, registerDoctor_server } from "@/actions/auth.actions";

const Register = () => {
	const router = useRouter();
	const params = useParams();

	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
		control,
		getValues,
		reset,
	} = useForm<registerFormData>({ resolver: zodResolver(registerFormSchema) });

	const onSubmit = async (data: registerFormData) => {
		setIsLoading(true);
		try {
			const res = await registerDoctor_server(data);

			if (!res.success) throw new Error(res.message || "Something went wrong");

			reset();
			Swal.fire({
				position: "center",
				icon: "success",
				title: "Registration Successful",
				showConfirmButton: false,
				text: "You are registered  as a doctor. Wait for admin approval. Thank you.",
				timer: 4000,
			});

			return router.push(`/${params?.lang || "en"}/admin/login`);

			//! legacy
			// await loginWithAuthJs({
			// 	email: data.email,
			// 	password: data.password,
			// });

			// return toast.success("Registration successful", { id: toastId });
		} catch (error: any) {
			return toast.error(error.message || "something went wrong");
		} finally {
			setIsLoading(false);
		}
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

			<InputCombo
				register={register("name")}
				error={errors.name?.message}
				icon={<User />}
				placeholder="Dr. name"
			/>

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
				icon={
					<Phone className="mx-3 h-6 w-6 text-gray-300 dark:text-gray-500" />
				}
				placeholder="01***"
			/>
			<InputComboForPassword
				register={register("password")}
				error={errors.password?.message}
				icon={<Lock />}
				placeholder="password"
			/>
			<InputComboForPassword
				register={register("confirmPassword")}
				error={errors.confirmPassword?.message}
				icon={<Lock />}
				placeholder="confirm password*"
			/>

			<button
				className="mt-6 w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
				type="submit"
			>
				{isLoading ? <EosLoading className="mx-auto" /> : "Sign Up"}
			</button>

			<DevTool control={control} />
		</form>
	);
};

export default Register;
