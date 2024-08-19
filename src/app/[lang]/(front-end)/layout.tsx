import { Nav } from "@/components";
import { getDictionary } from "@/Internationalization";
import React from "react";

const FrontEndLayout = async ({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: { lang: string };
}>) => {
	const dic = await getDictionary(params.lang, "root_menu");

	return (
		<>
			<Nav dictionary={dic} />
			{children}
		</>
	);
};

export default FrontEndLayout;
