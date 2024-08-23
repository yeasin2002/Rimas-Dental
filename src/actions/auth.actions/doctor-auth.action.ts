"use server";

import { signIn, signOut } from "@/auth";
import bcrypt from "bcrypt";

import { registerFormData } from "@/types";
import { db } from "@/model";
import { revalidatePath } from "next/cache";

export const registerDoctor_server = async ({ password, ...data }: registerFormData) => {
	try {
		// check If Email Already Exists

		const checkDoctorExist = await db.Doctors.findOne({ email: data.email });
		if (checkDoctorExist) throw new Error("Doctor with this email  already exists");

		// Hash Password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Create User
		await db.Doctors.create({
			password: hashedPassword,
			facebook: {
				name: data.facebookName || "",
				link: data.facebookLink || "",
			},
			...data,
		});
		return { success: true, message: "success" };

		// const newUser = await db.Doctors.create({
		// 	name: data.name,
		// 	email: data.email,
		// 	password: hashedPassword,
		// 	gender: data.gender,
		// 	phone: data.phone,
		// 	profileImage: data.profileImage,
		// });
	} catch (error: any) {
		return { success: false, message: error?.message as string };
	}
};

export const loginWithAuthJs = async ({ email, password }: { email: string; password: string }) => {
	return await signIn("credentials", {
		email,
		password,
		redirect: false,
	});
};

export const logoutWithAuthJs = async (redirectTo?: string) => {
	await signOut({
		redirectTo: redirectTo,
	});
	revalidatePath("/");
};
