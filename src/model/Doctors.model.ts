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
const doctorsSchema = new Schema(
	{
		// basic info
		name: { type: String, required: true },
		profileImage: { type: String, required: true },
		gender: { type: String, enum: Gender, required: true },

		// contact info
		email: { type: String, unique: true, required: true },
		phone: { type: String, required: true },
		address: { type: String, default: null },

		facebook: {
			name: { type: String, default: null, required: false },
			link: { type: String, default: null, required: false },
		},

		// secondary info
		specialization: { type: String, default: null },
		yearsOfExperience: { type: String, default: 0 },
		bio: { type: String, default: null },
		password: { type: String, required: true },

		// others
		services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Services" }],
		isPending: { type: Boolean, default: true },
		role: { type: String, enum: DoctorsRole, default: DoctorsRole.Doctor },
	},
	{ timestamps: true },
);

export const Doctors = mongoose.models.Doctors || mongoose.model("Doctors", doctorsSchema);
