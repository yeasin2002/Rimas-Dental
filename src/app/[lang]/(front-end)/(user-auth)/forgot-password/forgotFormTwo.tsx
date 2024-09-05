import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Email, FileDigit, Lock, InputCombo, InputComboForPassword } from "@/components";

export const forgotPasswordSchema = z.object({
	otp: z.string().min(6, { message: "OTP is too short" }).max(6, { message: "OTP is too long" }),
	password: z.string().min(6, { message: "Password is too short" }).max(50, { message: "Password is too long" }),
	confirmPassword: z.string().min(6, { message: "Password is too short" }).max(50, { message: "Password is too long" }),
});
export type forgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

interface Props {
	dictionary: any;
}

export const ForgotFormTwo = ({ dictionary }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isLoading },
		setError,
	} = useForm<forgotPasswordFormData>({
		resolver: zodResolver(forgotPasswordSchema),
	});

	const onSubmit = async (data: forgotPasswordFormData) => {
		console.log("🚀 ~ onSubmit ~ data:", data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
			<InputCombo
				register={register("otp")}
				error={errors.otp?.message}
				icon={<FileDigit />}
				placeholder={dictionary.otp}
				labelName={dictionary.otp_label}
			/>

			<InputComboForPassword
				register={register("password")}
				error={errors.password?.message}
				placeholder="******"
				icon={<Lock />}
				labelName={dictionary.password_label}
			/>
			<InputComboForPassword
				register={register("confirmPassword")}
				error={errors.confirmPassword?.message}
				icon={<Lock />}
				placeholder="******"
				labelName={dictionary.confirm_password_label}
			/>
			<div>
				<button
					className="mt-6 w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 2xl:py-4 2xl:text-2xl"
					type="submit"
				>
					{dictionary?.submit}
				</button>
			</div>
		</form>
	);
};
