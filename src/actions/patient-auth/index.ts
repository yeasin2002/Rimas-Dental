"use server";

import { prisma } from "@/lib";
import { registerFormSchema } from "@/schema";
import bcrypt from "bcrypt";
import * as z from "zod";

type registerFormData = z.infer<typeof registerFormSchema>;

export const register_server = async (data: registerFormData) => {
	try {
		// check If Email Already Exists
		const checkDoctorExist = await prisma.doctors.findFirst({
			where: { email: data.email },
		});
		if (checkDoctorExist)
			throw new Error("Doctor with this email  already exists");

		// Hash Password
		const hashedPassword = await bcrypt.hash(data.password, 10);
		// Create User
		await prisma.doctors.create({
			data: {
				name: data.name,
				email: data.email,
				password: hashedPassword,
				gender: data.gender,
				phone: data.phone,
				profileImage: data.profileImage,
			},
		});

		return {
			success: true,
			message: "success",
		};
	} catch (error: any) {
		return {
			success: false,
			message: error?.message as string,
		};
	}
};

export const login_server = async () => {
	try {
		return {
			success: true,
			message: "success",
		};
		// eslint-disable-next-line no-unreachable
	} catch (error) {
		return {
			success: false,
			message: "Invalid email or password",
		};
	}
};
