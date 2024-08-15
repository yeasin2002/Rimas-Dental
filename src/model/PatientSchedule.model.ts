import mongoose from "mongoose";
const { Schema } = mongoose;

// PatientSchedule Schema
const patientScheduleSchema = new Schema({
	date: { type: Date, required: true },
	treatmentNote: { type: String, required: true },
	paidToday: { type: Number, required: true },
	balanceRemaining: { type: Number, required: true },
	next_Rx_plan: { type: String, default: null },

	clientsId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Patient",
		default: null,
	},
});

export const PatientSchedule =
	mongoose.models.PatientSchedule ||
	mongoose.model("PatientSchedule", patientScheduleSchema);
