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
			className="sticky top-0 z-50 flex items-center justify-between bg-white py-3 mini:container"
		>
			<Logo href={"/"} />
			<div className="flex items-center justify-between gap-x-2">
				<Link
					href={pathname === "/" ? "/about-us" : "/"}
					className="flex items-center justify-start rounded-full border border-main-500 px-1 py-2 text-main-400 mini:px-4 mini:py-3"
				>
					<ChevronRight
						className={cn("transition-all sm:ml-2", {
							"rotate-180": pathname !== "/",
							"order-last": pathname === "/",
						})}
					/>
					<span>{pathname === "/" ? "আমাদের সম্পর্কে" : "হোম"}</span>
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
