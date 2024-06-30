import { Nav } from "@/components";
import React from "react";

const FrontEndLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<Nav />
			{children}
		</>
	);
};

export default FrontEndLayout;
