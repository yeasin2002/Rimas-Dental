import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Email, InputCombo } from "@/components";

export const forgotPasswordSchema = z.object({ email: z.string().email() });
export type forgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

interface Props {
	dictionary: any;
}

export const ForgotFormOne = ({ dictionary }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<forgotPasswordFormData>({ resolver: zodResolver(forgotPasswordSchema) });

	const onSubmit = async (data: forgotPasswordFormData) => {
		console.log("🚀 ~ onSubmit ~ data:", data);
	};

	return (
		<div>
			<h2 className="max-w-2xl py-4 text-center">{dictionary?.heading}</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-10">
				<InputCombo
					register={register("email")}
					error={errors.email?.message}
					icon={<Email />}
					placeholder={"example@gmai.com"}
					labelName={dictionary?.email_label}
				/>
				<button
					className="mt-6 w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 2xl:py-4 2xl:text-2xl"
					type="submit"
				>
					{dictionary?.submit}
				</button>
			</form>
		</div>
	);
};
