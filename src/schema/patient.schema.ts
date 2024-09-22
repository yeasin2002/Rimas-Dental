import { z } from "zod";

// Enums
const Gender = z.enum(["male", "female"]);
const SweetEatingLevel = z.enum(["low", "medium", "high", "no"]);

// Zod Schema for Patient
export const patientSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email").min(1, "Email is required"),
	phone1: z.string().min(1, "Primary phone number is required"),
	phone2: z.string().optional(),
	dateOfBirth: z.date().optional(),
	gender: Gender,
	address: z.string(),
	reference: z.string().optional(),
	occupation: z.string().min(1, "Occupation is required"),
	password: z.string().min(1, "Password is required"),
	majorDisease: z.array(z.string()).min(1, "At least one major disease is required"),

	regularBrushingTime: z.number().default(1),
	brushingMaterials: z.string().min(1, "Brushing material is required"),
	sweetEatingLevel: SweetEatingLevel.default("no"),

	examination: z.array(z.string()).optional(),
	problems: z.string().min(1, "Problems are required"),

	treatmentPlan: z.string().optional(),
	treatmentNote: z.string().optional(),
	drugHistory: z.string().optional(),
	treatmentDetails: z.string().optional(),
});
