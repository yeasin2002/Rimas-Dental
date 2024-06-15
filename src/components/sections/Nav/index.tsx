"use client";

import { Logo } from "@/components";
import React from "react";

import { usePathname } from "next/navigation";
import { LargeNav } from "./LargeNav";
import { MobileNav } from "./MobileNav";
interface Props extends React.ComponentProps<"nav"> {}

const menuItems = [
	{
		label: "হোম",
		href: "/",
	},
	{
		label: "আমাদের সম্পর্কে",
		href: "/about-us",
	},
	{
		label: "সার্ভিসসমূহ",
		href: "/services",
	},
];

export const Nav = (props: Props) => {
	const pathname = usePathname();
	const adminRouteRegex = /^\/admin(\/|$)/;

	return (
		<>
			{adminRouteRegex?.test(pathname) ? (
				""
			) : (
				<nav
					{...props}
					className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-3 mini:container"
				>
					<Logo href={"/"} />
					<>
						<MobileNav className="flex sm:hidden" menuItems={menuItems} />
						<LargeNav className="hidden sm:flex" menuItems={menuItems} />
					</>
				</nav>
			)}
		</>
	);
};
