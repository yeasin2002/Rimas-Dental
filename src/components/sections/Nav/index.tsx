"use client";

import { Logo } from "@/components";
import React from "react";

import { LargeNav } from "./LargeNav";
import { MobileNav } from "./MobileNav";
interface Props extends React.ComponentProps<"nav"> {}

export const Nav = (props: Props) => {
	return (
		<nav
			{...props}
			className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-3 2xl:py-4 w-full mini:px-8 2xl:px-10"
		>
			<Logo href={"/"} />
			<>
				<MobileNav className="flex sm:hidden" />
				<LargeNav className="hidden sm:flex" />
			</>
		</nav>
	);
};
