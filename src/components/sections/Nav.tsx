"use client";

import { Logo } from "@/components";
import { cn } from "@/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FacebookLogo } from "../icons";

interface Props extends React.ComponentProps<"nav"> {}

export const Nav = (props: Props) => {
	const pathname = usePathname();

	return (
		<nav
			{...props}
			className="flex items-center justify-between py-3 mini:container md:py-4"
		>
			<Logo href={"/"} />
			<div className="flex items-center justify-between gap-x-2">
				<Link
					href={pathname === "/" ? "/about-us" : "/"}
					className="flex items-center rounded-full border border-main-500 px-4 py-3 text-main-400"
				>
					<ChevronRight
						className={cn("transition-all sm:ml-2", {
							"rotate-180": pathname !== "/",
							"order-last": pathname === "/",
						})}
					/>
					<span>{pathname === "/" ? "About Us" : "Home "}</span>
				</Link>
				<a
					href="https://www.facebook.com/yeasin2002.dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FacebookLogo className="size-10" />
				</a>
			</div>
		</nav>
	);
};
