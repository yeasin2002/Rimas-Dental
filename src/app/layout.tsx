import { ClintProvider, Nav } from "@/components";
import { baseMetaData } from "@/config";
import { TiroBangla400 } from "@/fonts";
import React from "react";
import "./globals.css";

function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`overflow-x-hidden bg-main-100 ${TiroBangla400.className}`}
			>
				<ClintProvider>
					<Nav />
					{children}
				</ClintProvider>
			</body>
		</html>
	);
}

export default RootLayout;
export { baseMetaData as metadata };
