import * as z from "zod";
import { loginFormSchema, registerFormFirstStepSchema, registerFormSecondStepSchema } from "@/schema";

export type registerFormFirstStepData = z.infer<typeof registerFormFirstStepSchema>;
export type registerFormSecondStepData = z.infer<typeof registerFormSecondStepSchema>;

export type loginFormData = z.infer<typeof loginFormSchema>;
export type registerFormData = registerFormFirstStepData & registerFormSecondStepData;
