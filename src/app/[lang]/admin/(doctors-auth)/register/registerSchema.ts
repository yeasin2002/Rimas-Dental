import { z } from "zod";

export const registerFormSchema = z
	.object({
		name: z.string().min(3, { message: "Name is too short" }),
		profileImage: z.string(),
		email: z.string().email(),
		gender: z.enum(["male", "female"]),

		password: z
			.string()
			.min(8, { message: "Password is too short" })
			.max(20, { message: "Password is too long" }),
		confirmPassword: z
			.string()
			.min(8, { message: "Password is too short" })
			.max(20, { message: "Password is too long" }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});
