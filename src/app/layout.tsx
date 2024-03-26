import { ClintProvider } from "@/components";
import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
	title: "Rima's Dental",
	description: "By @yeasin2002",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-main-100">
				<ClintProvider>{children}</ClintProvider>
			</body>
		</html>
	);
}
