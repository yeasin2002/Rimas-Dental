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

// Doctors Schema
const doctorsSchema = new Schema({
	email: { type: String, unique: true, required: true },
	phone: { type: String, required: true },
	name: { type: String, required: true },
	profileImage: { type: String, required: true },
	gender: { type: String, enum: Object.values(Gender), required: true },

	specialization: { type: String, default: null },
	yearsOfExperience: { type: Number, default: 0 },
	bio: { type: String, default: null },
	role: {
		type: String,
		enum: Object.values(DoctorsRole),
		default: DoctorsRole.Doctor,
	},
	address: { type: String, default: null },
	password: { type: String, required: true },

	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
	isPending: { type: Boolean, default: true },
	services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Services" }],
});

export const Doctors =
	mongoose.models.Doctors || mongoose.model("Doctors", doctorsSchema);
