import { AlignJustify } from "lucide-react";
import Link from "next/link";
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

interface Props extends React.ComponentProps<"div"> {
	menuItems: {
		label: string;
		href: string;
	}[];
}

export const MobileNav = ({ menuItems, ...props }: Props) => {
	const pathname = usePathname();
	return (
		<div className={cn(props.className)} {...props}>
			<DropdownMenu>
				<DropdownMenuTrigger className="outline-none" aria-label="Open menu">
					<AlignJustify />
				</DropdownMenuTrigger>
				<DropdownMenuContent className="-translate-x-8">
					{menuItems.map((item, index) => (
						<DropdownMenuItem key={index}>
							<Link
								className={cn(
									`mx-3 flex items-center text-deepBlue-100 ${HindSiliguri.className}`,
									pathname === item.href &&
										`font-bold ${HindSiliguri600.className}`,
								)}
								href={item.href}
							>
								{item.label}
							</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
