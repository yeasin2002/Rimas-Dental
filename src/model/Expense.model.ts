import mongoose from "mongoose";

// Expense Schema
const expenseSchema = new mongoose.Schema({
	amount: { type: Number, required: true },
	date: { type: Date, required: true },
	description: { type: String, default: null },
	category: { type: String, default: null },

	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

export const Expense = mongoose.models.Expense || mongoose.model("Expense", expenseSchema);
