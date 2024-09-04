"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

import { loginPatient_server } from "@/actions/auth.actions";
import { Email, InputCombo, InputComboForPassword, Lock } from "@/components";
import { loginFormSchema } from "@/schema";
import { loginFormData } from "@/types";

interface Props {
	dictionary: any;
}

export const LoginForm = ({ dictionary }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isLoading },
		setError,
	} = useForm<loginFormData>({
		resolver: zodResolver(loginFormSchema),
	});

	const onSubmit = async (data: loginFormData) => {
		try {
			const res = await loginPatient_server(data);
			console.log("🚀 ~ onSubmit ~ res:", res);

			if (!res.success) throw new Error(res.message);
			toast.success(res?.message);
		} catch (error: any) {
			// toast.error(error?.message || "Invalid email or password", {id: toastId,});
			return Swal.fire({
				icon: "error",
				title: "authentication failed.",
				text: error?.message || "Something went wrong!",
			});
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
			<InputCombo
				register={register("email")}
				error={errors.email?.message}
				icon={<Email />}
				placeholder={dictionary?.emailPlaceholder || "Email"}
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
				className="mt-6 w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 2xl:py-4 2xl:text-2xl"
				type="submit"
			>
				{dictionary?.singup}
			</button>
		</form>
	);
};
