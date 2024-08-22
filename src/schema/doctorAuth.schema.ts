import { z } from "zod";

export const registerFormFirstStepSchema = z.object({
	name: z.string().min(3, { message: "Name is too short" }),
	profileImage: z.string(),
	email: z.string().email(),
	gender: z.enum(["male", "female"]),
	phone: z.string().min(10, { message: "Phone number should be 10 digits" }),
	address: z.string().optional(),
});

export const registerFormSecondStepSchema = z.object({
	facebookName: z.string().optional(),
	facebookLink: z.string().optional(),
	specialization: z.string().min(3, { message: "Specialization is too short" }),
	yearsOfExperience: z.string().min(1, { message: "Bio is required" }),
	bio: z.string().min(5, { message: "Bio is too short" }),
	password: z.string().min(8, { message: "Password is too short" }),
});
