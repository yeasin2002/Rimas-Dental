"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";

import { loginFormSchema } from "@/schema";
import { loginWithAuthJs } from "@/actions";
import { loginFormData } from "@/types";
import {
	Email,
	EosLoading,
	InputCombo,
	InputComboForPassword,
	Lock,
} from "@/components";

const Login = () => {
	const router = useRouter();
	const lang = useParams()?.lang;
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<loginFormData>({ resolver: zodResolver(loginFormSchema) });

	const onSubmit = async (data: loginFormData) => {
		console.log("🚀 ~ onSubmit ~ data:", data);

		setIsLoading(true);
		const toastId = toast.loading("Processing...");
		try {
			const loginReq = await loginWithAuthJs({
				email: data.email,
				password: data.password,
			});

			console.log("🚀 ~ onSubmit ~ loginReq:", loginReq);
			toast.success("login successful", { id: toastId });

			return router.push(`/${lang}/admin`);
		} catch (error: any) {
			console.log("🚀 ~ onSubmit ~ error:", error?.message);
			return toast.error("Registration failed", { id: toastId });
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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
				placeholder="*******"
			/>
			<InputComboForPassword
				register={register("confirmPassword")}
				error={errors.confirmPassword?.message}
				icon={<Lock />}
				placeholder="******"
			/>

			<button
				className="mt-6 w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
				type="submit"
			>
				{isLoading ? <EosLoading className="mx-auto" /> : "Sign In"}
			</button>
		</form>
	);
};

export default Login;
