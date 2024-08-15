import mongoose from "mongoose";
const { Schema } = mongoose;

// Enums
const Gender = Object.freeze({
	Male: "male",
	Female: "female",
});

const DoctorsRole = Object.freeze({
	Admin: "admin",
	Doctor: "doctor",
	Visitor: "visitor",
});

const SweetEatingLevel = Object.freeze({
	Low: "low",
	Medium: "medium",
	High: "high",
	No: "no",
});

// Patient Schema
const patientSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	phone1: { type: String, required: true },
	phone2: { type: String, default: null },
	dateOfBirth: { type: Date, default: null },
	gender: { type: String, enum: Object.values(Gender), required: true },
	address: { type: String, default: null },
	reference: { type: String, default: null },
	occupation: { type: String, required: true },
	password: { type: String, required: true },

	treatmentNotes: { type: String, required: true },
	majorDisease: [{ type: String, required: true }],

	regularBrushingTime: { type: Number, default: 1 },
	brushingMaterials: { type: String, required: true },
	sweetEatingLevel: {
		type: String,
		enum: Object.values(SweetEatingLevel),
		default: SweetEatingLevel.No,
	},

	examination: [{ type: String, required: true }],
	problems: { type: String, required: true },

	treatmentPlan: { type: String, default: null },
	treatmentNote: { type: String, default: null },
	drugHistory: { type: String, default: null },
	treatmentDetails: [
		{ type: mongoose.Schema.Types.ObjectId, ref: "PatientSchedule" },
	],

	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

export const Patient =
	mongoose.models.Patient || mongoose.model("Patient", patientSchema);