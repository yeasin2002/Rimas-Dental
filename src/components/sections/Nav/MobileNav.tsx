"use client";

import { AlignJustify } from "lucide-react";
import React from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { HindSiliguri, HindSiliguri600 } from "@/fonts";
import { cn } from "@/utils";
import { usePathname } from "next/navigation";
import { LinkTo } from "@/components/client";

interface Props extends React.ComponentProps<"div"> {
	rootMenuItems: {
		label: any;
		href: string;
	}[];
	login: string;
}

export const MobileNav = ({ rootMenuItems, ...props }: Props) => {
	const pathname = usePathname();
	return (
		<div className={cn(props.className)} {...props}>
			<DropdownMenu>
				<DropdownMenuTrigger className="outline-none" aria-label="Open menu">
					<AlignJustify />
				</DropdownMenuTrigger>
				<DropdownMenuContent className="-translate-x-8">
					{rootMenuItems.map((item, index) => (
						<DropdownMenuItem key={index}>
							<LinkTo
								className={cn(
									`mx-3 flex items-center text-deepBlue-100 ${HindSiliguri.className}`,
									pathname === item.href && `font-bold ${HindSiliguri600.className}`,
								)}
								href={item.href}
							>
								{item.label}
							</LinkTo>
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
