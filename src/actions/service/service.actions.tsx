"use server";

import { db } from "@/model";
import { Service, serviceFormData } from "@/types";

export const addService = async (data: serviceFormData) => {
	try {
		await db.connectDB();
		const req = await db.Service.create(data);
		return {
			success: true,
			message: "successfully added services ",
		};
	} catch (error: any) {
		console.log("🚀 ~ addService ~ error:", error.message);
		return {
			success: false,
			message: error?.message,
		};
	}
};

export const getAllService = async () => {
	try {
		await db.connectDB();
		const req = (await db.Service.find({}).populate({ path: "doctorsId" }).lean()) as Service[];
		return {
			success: true,
			message: "successfully added services ",
			data: req || [],
		};
	} catch (error: any) {
		console.log("🚀 ~ addService ~ error:", error.message);
		return {
			success: false,
			message: error?.message,
		};
	}
};

export const getServiceById = async (id: string) => {
	try {
		await db.connectDB();
		const req = (await db.Service.findById({ _id: id }).populate({ path: "doctorsId" }).lean()) as Service;
		return {
			success: true,
			message: "successfully added services ",
			data: req,
		};
	} catch (error: any) {
		console.log("🚀 ~ addService ~ error:", error.message);
		return {
			success: false,
			message: error?.message,
		};
	}
};
