"use server";

import { db } from "@/model";
import { AppointmentScheduleData } from "@/schema";
import { Appointments } from "@/types";

export const createNewAppointment = async (body: AppointmentScheduleData) => {
	try {
		await db.connectDB();
		await db.Appointment.create(body);
		return true;
	} catch (error) {
		console.log("🚀 ~ createNewAppointment ~ error:", error);
	}
};

export const getAllAppointment = async () => {
	try {
		await db.connectDB();
		const data = await db.Appointment.find({ isCompleted: false }).lean();
		return data as Appointments[];
	} catch (error) {
		console.log("🚀 ~ createNewAppointment ~ error:", error);
	}
};

export const deleteAppointment = async (id: string) => {
	try {
		await db.connectDB();
		const data = await db.Appointment.deleteOne({ _id: id }).lean();
		return data;
	} catch (error) {
		console.log("🚀 ~ deleteAppointment ~ error:", error);
	}
};

export const markAppointmentAsDone = async (id: string) => {
	try {
		await db.connectDB();
		const data = await db.Appointment.updateOne({ _id: id }, { $set: { isCompleted: true } }).lean();
		return data;
	} catch (error) {
		console.log("🚀 ~ deleteAppointment ~ error:", error);
	}
};
