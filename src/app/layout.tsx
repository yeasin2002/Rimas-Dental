import NextTopLoader from "nextjs-toploader";
import React from "react";

import { ClintProvider } from "@/components";
import { baseMetaData } from "@/config";
import { TiroBangla400 } from "@/fonts";
import { EdgeStoreProvider } from "@/lib/edgestore";
import "./globals.css";

function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`3xl:container   overflow-x-hidden bg-main-100 ${TiroBangla400.className}`}
			>
				<EdgeStoreProvider>
					<NextTopLoader color="#3066ac" showSpinner={false} />
					<ClintProvider>{children}</ClintProvider>
				</EdgeStoreProvider>
			</body>
		</html>
	);
}

export default RootLayout;
export { baseMetaData as metadata };
