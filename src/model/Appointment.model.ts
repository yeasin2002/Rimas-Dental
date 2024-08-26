// name: string;
// phone: string;
// date: Date;
// time: {
//     from: string;
//     to: string;
// };

import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
	name: { type: String, required: true },
	phone: { type: String, required: true },
	date: { type: Date, required: true },
	time: { from: { type: String, required: true }, to: { type: String, required: true } },

	isCompleted: { type: Boolean, default: false },
});

export const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);
