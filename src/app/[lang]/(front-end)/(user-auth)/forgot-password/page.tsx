import React from "react";
import { getDictionary } from "@/Internationalization";
import { ForgotFormFormContainer } from "./ForgotFormFormContainer";

interface Props {
	params: { lang: string };
}

const LoginPage = async ({ params }: Props) => {
	const dictionary = await getDictionary(params.lang, "forgot_password");

	return (
		<section>
			<ForgotFormFormContainer dictionary={dictionary?.useAuth?.forgot_password} />
		</section>
	);
};

export default LoginPage;

export async function generateStaticParams() {
	return [{ lang: "bn" }, { lang: "en" }];
}
