import { Nav } from "@/components";
import { getDictionary } from "@/Internationalization";
import { authSession } from "@/lib/auth";
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
	const session = await authSession.getSession();

	// console.log("🚀 ~ doctor session:", doctorSession);
	// console.log("🚀 ~Patient session:", session);

	return (
		<>
			<Nav dictionary={dic} doctorSession={doctorSession} />
			{children}
		</>
	);
};

export default FrontEndLayout;
