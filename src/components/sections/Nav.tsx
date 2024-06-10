import { Button, Logo } from "@/components";
import { cn } from "@/utils";
import { ChevronRight, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FacebookLogo } from "../icons";

interface Props extends React.ComponentProps<"nav"> {}

export const Nav = (props: Props) => {
	return (
		<nav
			{...props}
			className="flex items-center justify-between py-3 mini:container md:py-4"
		>
			<Logo />
			<div className="flex items-center justify-between gap-x-2">
				<Link
					href="/about-us"
					className={cn(
						"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
						"rounded-full border border-main-500 text-main-400",
						"flex items-center p-2",
					)}
				>
					About Us
					<ChevronRight className="sm:ml-2" />
				</Link>
				<FacebookLogo className="size-10" />
			</div>
		</nav>
	);
};
