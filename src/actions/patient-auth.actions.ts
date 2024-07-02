"use server";

import { prisma } from "@/lib";
import { authSession } from "@/lib/auth";
import { loginFormSchema, registerFormSchema } from "@/schema";
import bcrypt from "bcrypt";
import * as z from "zod";

type registerFormData = z.infer<typeof registerFormSchema>;
type loginFormData = z.infer<typeof loginFormSchema>;

export const loginPatient_server = async ({
	email,
	password,
}: loginFormData) => {
	try {
		const findUser = await prisma.patient.findFirst({ where: { email } });
		if (!findUser) throw new Error("No User Found with this email");

		const isMatch = await bcrypt.compare(password, findUser?.password);
		if (!isMatch) throw new Error("Invalid email or password");

		await authSession.login({
			name: findUser.name,
			email: findUser.email,
		});

		return {
			success: true,
			message: "success",
		};
	} catch (error: any) {
		return {
			success: false,
			message: error.message || "Invalid email or password",
		};
	}
};
