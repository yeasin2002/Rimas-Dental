import { LinkTo } from "@/components";
import { getDictionary } from "@/Internationalization";
import React from "react";

interface Props {
	params: {
		lang: string;
	};
}

const Register = async ({ params }: Props) => {
	const dictionary = await getDictionary(params.lang, "useAuth");

	return (
		<div className="flex flex-col items-center justify-center py-20 text-center">
			<h3>{dictionary.register.heading}</h3>
			<p>{dictionary.register.subHeading}</p>
			<p className="mt-5">
				{dictionary.register.bookAppointment}
				<LinkTo href={"/about-us"} className="mx-1 text-main-400">
					{dictionary.register.bookAppointment2}
				</LinkTo>
				{dictionary.register.bookAppointment3}
			</p>
		</div>
	);
};

export async function generateStaticParams() {
	return [{ lang: "bn" }, { lang: "en" }];
}

export default Register;
