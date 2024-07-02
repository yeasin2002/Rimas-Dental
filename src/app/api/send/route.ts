import { EmailTemplate } from "@/components/email-template/initialTemplates";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
	try {
		const emailOptions = {
			from: "Acme <onboarding@resend.dev>",
			to: ["delivered@resend.dev"],
			subject: "Hello world",
			text: "Hello world",
			react: EmailTemplate({ firstName: "John" }),
		};

		const { data, error } = await resend.emails.send(emailOptions);

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
