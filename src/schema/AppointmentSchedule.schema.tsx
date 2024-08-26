import * as z from "zod";

export const AppointmentScheduleSchema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	phone: z.string().min(1, { message: "Phone is required" }),
	date: z.date().min(new Date(), { message: "Date is required" }).default(new Date()),
	time: z.object({ from: z.string(), to: z.string() }).required(),
});

export type AppointmentScheduleData = z.infer<typeof AppointmentScheduleSchema>;
