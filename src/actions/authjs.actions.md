"use server";

import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

import { prisma } from "@/lib";
import { registerFormSchema } from "@/schema";
import bcrypt from "bcrypt";
import * as z from "zod";

type registerFormData = z.infer<typeof registerFormSchema>;

export const loginWithAuthJs = async ({
	email,
	password,
}: { email: string; password: string }) => {
	try {
		const response = await signIn("credentials", {
			email,
			password,
			redirect: false,
		});
		revalidatePath("/");

		return response;
	} catch (error: any) {
		return error?.message;
	}
};

export const logoutWithAuthJs = async () => {
	try {
		await signOut();
		revalidatePath("/");
	} catch (error: any) {
		return error?.message;
	}
};

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
