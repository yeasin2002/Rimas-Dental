import React from "react";
import { LoginForm } from "./logInForm";
import { getDictionary } from "@/Internationalization";

interface Props {
	params: {
		lang: string;
	};
}

const LoginPage = async ({ params }: Props) => {
	const dictionary = await getDictionary(params.lang, "useAuth");

	return (
		<>
			<LoginForm dictionary={dictionary} />
		</>
	);
};

export default LoginPage;

export async function generateStaticParams() {
	return [{ lang: "bn" }, { lang: "en" }];
}
