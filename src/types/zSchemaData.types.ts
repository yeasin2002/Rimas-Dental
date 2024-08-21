import * as z from "zod";
import { loginFormSchema, registerFormSchema } from "@/schema";

export type loginFormData = z.infer<typeof loginFormSchema>;
export type registerFormData = z.infer<typeof registerFormSchema>;
