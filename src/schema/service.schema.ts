import { z } from "zod";

export const serviceSchema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	description: z.string().min(1, { message: "Description is required" }),
	content: z.string().min(1, { message: "Content is required" }),
	coverImage: z.string().min(1, { message: "Cover Image is required" }),

	icons: z.string().optional(),
	price_range: z.string().min(1, { message: "Price Range is required" }),

	YT_VideoUrl: z.string().nullable().optional(),
	tags: z
		.array(z.string().min(1, { message: "Each tag must be a non-empty string" }))
		.min(1, { message: "At least one tag is required" }),

	isPaused: z.boolean().optional().default(false),
	doctorsId: z.string().optional(),
});
