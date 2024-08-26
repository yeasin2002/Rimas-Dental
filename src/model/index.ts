import connectDB from "@/lib/connectDB";
import { Doctors } from "./Doctors.model";
import { Expense } from "./Expense.model";
import { Patient } from "./Patient.model";
import { PatientSchedule } from "./PatientSchedule.model";
import { Service } from "./Service.model";
import { Appointment } from "./Appointment.model";

export const db = {
	connectDB,

	// models
	Doctors,
	Expense,
	Patient,
	PatientSchedule,
	Service,
	Appointment,
};
