import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { HindSiliguri, HindSiliguri600 } from "@/fonts";
import { cn } from "@/utils";

interface Props extends React.ComponentProps<"div"> {
	menuItems: {
		label: string;
		href: string;
	}[];
}

export const LargeNav = ({ menuItems, ...props }: Props) => {
	const pathname = usePathname();

	return (
		<div className={cn(props.className)} {...props}>
			{menuItems.map((item, index) => (
				<Link
					key={index}
					className={cn(
						`mx-3 flex items-center text-deepBlue-100 ${HindSiliguri.className}`,
						pathname === item.href &&
							`border-b border-main-400 font-bold ${HindSiliguri600.className}`,
					)}
					href={item.href}
				>
					{item.label}
				</Link>
			))}

			<Link
				className={cn(
					`mx-3 flex items-center text-deepBlue-100 ${HindSiliguri.className}`,
				)}
				href={"/admin"}
			>
				ড্যাশবোর্ড
			</Link>
		</div>
	);
};
