import { z } from "zod";

export const loginFormSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(8, { message: "Password is too short" }).max(40, { message: "Password is too long" }),
		confirmPassword: z
			.string()
			.min(8, { message: "Password is too short" })
			.max(40, { message: "Password is too long" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});
