"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { loginWithAuthJs } from "@/actions/authjs.actions";
import {
	Email,
	EosLoading,
	InputCombo,
	InputComboForPassword,
	Lock,
} from "@/components";
import { loginFormSchema } from "@/schema";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

type LoginFormData = z.infer<typeof loginFormSchema>;

const Login = () => {
	const router = useRouter();
	const lang = useParams()?.lang;
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginFormSchema),
	});

	const onSubmit = async (data: LoginFormData) => {
		setIsLoading(true);
		const toastId = toast.loading("Processing...");
		try {
			await loginWithAuthJs({
				email: data.email,
				password: data.password,
			});
			toast.success("login successful", { id: toastId });
			return router.push(`/${lang}/admin`);
		} catch (error) {
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
