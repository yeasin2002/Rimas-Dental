import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { rootMenuItems } from "@/data/navItems";
import { HindSiliguri, HindSiliguri600 } from "@/fonts";
import { cn } from "@/utils";

interface Props extends React.ComponentProps<"div"> {}

export const LargeNav = ({ ...props }: Props) => {
	const pathname = usePathname();

	return (
		<div className={cn(props.className)} {...props}>
			{rootMenuItems.map((item, index) => (
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
