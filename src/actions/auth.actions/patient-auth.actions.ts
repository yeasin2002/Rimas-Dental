"use server";

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

import connectDB from "@/lib/connectDB";
import { authSession } from "@/lib/auth";
import { loginFormData, patientSchemaForDoctorToAddData, registerFormData } from "@/types";
import { db } from "@/model";

export const loginPatient_server = async ({ email, password }: loginFormData) => {
	try {
		await connectDB();

		const findUser = await db.Patient.findOne({ email });
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

export const registerPatient_server = async (data: registerFormData) => {
	try {
		// check If Email Already Exists
		const checkDoctorExist = await mongoose.models.Doctor.findOne({
			email: data.email,
		});
		if (checkDoctorExist) throw new Error("Doctor with this email  already exists");

		// Hash Password
		const hashedPassword = await bcrypt.hash(data.password, 10);

		await mongoose.models.Doctor.create({
			name: data.name,
			email: data.email,
			password: hashedPassword,
			gender: data.gender,
			phone: data.phone,
			profileImage: data.profileImage,
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

export const registerPatientByDoctor_server = async (data: patientSchemaForDoctorToAddData) => {
	try {
		// check If Email Already Exists
		const checkDoctorExist = await mongoose.models.Doctor.findOne({
			email: data.email,
		});
		if (checkDoctorExist) throw new Error("Doctor with this email  already exists");

		// Hash Password
		const hashedPassword = await bcrypt.hash(data.password, 10);

		await mongoose.models.Doctor.create({
			name: data.name,
			email: data.email,
			password: hashedPassword,
			gender: data.gender,
			// phone: data.phone,
			// profileImage: data.profileImage,
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
