import mongoose from "mongoose";

// Services Schema
const servicesSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	content: { type: String, required: true },
	coverImage: { type: String, required: true },

	icons: { type: String, default: null },
	YT_VideoUrl: { type: String, default: null },
	price_range: { type: String, default: null },
	tags: [{ type: String, required: true }],
	isPaused: { type: Boolean, default: false },

	doctorsId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Doctors",
		required: true,
	},

	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

export const Service = mongoose.models.Service || mongoose.model("Service", servicesSchema);
