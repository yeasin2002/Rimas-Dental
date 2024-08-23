"use server";

import { serviceFormData } from "@/types";

export const addService = async (data: serviceFormData) => {
	return {
		success: true,
		message: "",
	};
};
