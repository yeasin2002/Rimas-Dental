"use server";

import { InitialEmail } from "@/emails";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const SendInitialEmail = async () => {
	try {
		const emailOptions = {
			from: "Acme <onboarding@resend.dev>",
			to: ["delivered@resend.dev"],
			subject: "Hello world",
			text: "Hello world",
			react: InitialEmail(),
		};

		return await resend.emails.send(emailOptions);
	} catch (error) {
		return { data: null, error };
	}
};
