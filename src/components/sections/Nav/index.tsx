"use client";

import { Logo } from "@/components";
import React from "react";

import { usePathname } from "next/navigation";
import { LargeNav } from "./LargeNav";
import { MobileNav } from "./MobileNav";
interface Props extends React.ComponentProps<"nav"> {}

export const Nav = (props: Props) => {
	const pathname = usePathname();
	const adminRouteRegex = /\/(en|bn|es|...)\/admin(\/|$)/;

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
						<MobileNav className="flex sm:hidden" />
						<LargeNav className="hidden sm:flex" />
					</>
				</nav>
			)}
		</>
	);
};
