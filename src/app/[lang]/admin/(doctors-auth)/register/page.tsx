"use client";

import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

import { loginWithAuthJs } from "@/actions/authjs.actions";
import { register_server } from "@/actions/patient-auth.actions";

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
import { useRouter } from "next/navigation";

type registerFormData = z.infer<typeof registerFormSchema>;

const Register = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		setValue,
		watch,
		control,
		getValues,
	} = useForm<registerFormData>({
		resolver: zodResolver(registerFormSchema),
	});

	const onSubmit = async (data: registerFormData) => {
		const toastId = toast.loading("Uploading...");
		setIsLoading(true);
		try {
			const res = await register_server(data);
			if (!res.success) throw new Error(res.message || "Something went wrong");
			await loginWithAuthJs({
				email: data.email,
				password: data.password,
			});

			router.push("/en/admin");
			return toast.success("Registration successful", { id: toastId });
		} catch (error: any) {
			setError("root", {
				message: "Invalid email or password",
			});
			return toast.error(error.message || "something went wrong", {
				id: toastId,
			});
		} finally {
			setIsLoading(false);
		}
	};

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
				className="w-full transform rounded-lg bg-blue-500 px-6 py-3  mt-6 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
				type="submit"
			>
				{isLoading ? <EosLoading className="mx-auto" /> : "Sign Up"}
			</button>

			<DevTool control={control} />
		</form>
	);
};

export default Register;
