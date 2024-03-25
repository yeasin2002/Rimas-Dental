import { ClintProvider } from "@/components";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Next TypeScript Starter",
	description: "By @yeasin2002",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ClintProvider>{children}</ClintProvider>
			</body>
		</html>
	);
}
