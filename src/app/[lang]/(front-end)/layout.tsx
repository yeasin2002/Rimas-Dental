import { Nav } from "@/components";
import { getDictionary } from "@/Internationalization";
import React from "react";
import { auth } from "@/auth";

const FrontEndLayout = async ({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { lang: string };
}>) => {
	const dic = await getDictionary(params.lang, "root_menu");
	const doctorSession = await auth();

	return (
		<>
			<Nav dictionary={dic} doctorSession={doctorSession} />
			{children}
		</>
	);
};

export default FrontEndLayout;
