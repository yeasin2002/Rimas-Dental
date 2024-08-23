"use server";

import { db } from "@/model";
import { Doctor } from "@/types";

export const getAllDoctors = async () => {
	try {
		await db.connectDB();
		const doctors: Doctor[] = (await db.Doctors.find({ isPending: false }).lean()) || [];
		const pendingDoctors: Doctor[] = (await db.Doctors.find({ isPending: true }).lean()) || [];

		return {
			success: true,
			message: "success",
			data: { doctors, pendingDoctors },
		};
	} catch (error: any) {
		return {
			success: false,
			message: error.message,
		};
	}
};
