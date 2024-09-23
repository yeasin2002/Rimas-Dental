import mongoose from "mongoose";
const { Schema } = mongoose;

// Enums
const Gender = Object.freeze({
	Male: "male",
	Female: "female",
});

const SweetEatingLevel = Object.freeze({
	Low: "low",
	Medium: "medium",
	High: "high",
	No: "no",
});

// Patient Schema
const patientSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, unique: true, required: true },
		phone1: { type: String, required: true },
		phone2: { type: String, default: null },
		dateOfBirth: { type: Date, required: true },
		gender: { type: String, enum: Gender, required: true },
		address: { type: String, required: true },
		reference: { type: String, default: null },
		occupation: { type: String, required: true },
		password: { type: String, required: true },

		majorDisease: [{ type: String, default: null }],
		regularBrushingTime: { type: Number, default: 1 },
		sweetEatingLevel: { type: String, enum: SweetEatingLevel, default: SweetEatingLevel.No },

		examination: [{ type: String }],
		problems: [{ type: String, required: true }],

		treatmentPlan: { type: String, default: null },
		treatmentNote: { type: String, default: null },
		drugHistory: { type: String, default: null },
		treatmentDetails: [{ type: mongoose.Schema.Types.ObjectId, ref: "PatientSchedule" }],
		isAddedByDoctor: { type: Boolean, default: false },
	},
	{ timestamps: true },
);

export const Patient = mongoose.models.Patient || mongoose.model("Patient", patientSchema);
