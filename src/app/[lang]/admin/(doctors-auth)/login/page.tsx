"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { login_server } from "@/actions";
import { Email, InputCombo, InputComboForPassword, Lock } from "@/components";
import toast from "react-hot-toast";
import { loginFormSchema } from "./loginFormSchema";

type LoginFormData = z.infer<typeof loginFormSchema>;

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isLoading },
		setError,
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginFormSchema),
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
				Sign Up
			</button>
		</form>
	);
};

export default Login;
