import { z } from "zod";

const GenderEnum = z.enum(["Male", "Female"]);
const SweetEatingLevelEnum = z.enum(["no", "low", "medium", "high"]);

export const NewPatientSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	phone1: z.string(),
	gender: GenderEnum,
	password: z.string(),
	address: z.string(),

	phone2: z.string().optional(),
	dateOfBirth: z.date().optional(),
	reference: z.string().optional(),

	majorDisease: z.array(z.string()),
	regularBrushingTime: z.number().int().default(1),
	brushingMaterials: z.string(),
	sweetEatingLevel: SweetEatingLevelEnum.default("no"),

	examination: z.array(z.string()).optional(),
	problems: z.string().optional(),

	occupation: z.string().optional(),

	treatmentNotes: z.string().optional(),
	treatmentPlan: z.string().optional(),
	treatmentNote: z.string().optional(),
	drugHistory: z.string().optional(),
});
