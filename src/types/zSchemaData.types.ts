import * as z from "zod";
import { loginFormSchema, registerFormFirstStepSchema, registerFormSecondStepSchema, serviceSchema } from "@/schema";

export type serviceFormData = z.infer<typeof serviceSchema>;

// authentication schema types
export type registerFormFirstStepData = z.infer<typeof registerFormFirstStepSchema>;
export type registerFormSecondStepData = z.infer<typeof registerFormSecondStepSchema>;

export type loginFormData = z.infer<typeof loginFormSchema>;
export type registerFormData = registerFormFirstStepData & registerFormSecondStepData;
