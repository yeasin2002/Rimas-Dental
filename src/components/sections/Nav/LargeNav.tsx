import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { Button, buttonVariants, LinkTo } from "@/components";
import { rootMenuItems } from "@/data/navItems";
import { HindSiliguri, HindSiliguri600 } from "@/fonts";
import { cn } from "@/utils";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";

interface Props extends React.ComponentProps<"div"> {}

export const LargeNav = ({ ...props }: Props) => {
	const pathname = usePathname();
	const isLogin = false;

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

			<div>
				{!isLogin ? (
					<LinkTo
						href={"/login"}
						className={buttonVariants({ className: "rounded-full" })}
					>
						Login
					</LinkTo>
				) : (
					<div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant="secondary"
									size="icon"
									className="rounded-full"
								>
									<CircleUser className="size-5" />
									<span className="sr-only">Toggle user menu</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem>Profile</DropdownMenuItem>
								<DropdownMenuItem>
									<LinkTo href={"/admin"}>Dashboard</LinkTo>
								</DropdownMenuItem>

								<DropdownMenuSeparator />
								<DropdownMenuItem>Logout</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				)}
			</div>
		</div>
	);
};
