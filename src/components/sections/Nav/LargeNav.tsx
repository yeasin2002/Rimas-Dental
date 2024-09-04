"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

import { Button, buttonVariants, LinkTo } from "@/components";
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
import { LangSwitcher } from "@/components/global/LanguageSwitcher";
import { Session } from "next-auth";

interface Props extends React.ComponentProps<"div"> {
	rootMenuItems: {
		label: any;
		href: string;
	}[];
	loginText: string;
	dashboardText: string;
	doctorSession: Session | null;
}

export const LargeNav = ({ rootMenuItems, dashboardText, doctorSession, loginText, ...props }: Props) => {
	const pathname = usePathname();
	const isLogin = false;

	return (
		<div className={cn(props.className)} {...props}>
			{rootMenuItems.map((item, index) => {
				const currentPath = `/${pathname.split("/")?.at(-1)}`;
				const activeStyle = `border-b border-main-400 font-bold ${HindSiliguri600.className}`;

				console.table({ item: item.href, currentPath, isMatched: item.href === currentPath });

				return (
					<LinkTo
						key={index}
						className={cn(
							`mx-3 flex items-center text-deepBlue-100 transition-all 2xl:text-2xl ${HindSiliguri.className}`,
							currentPath === item.href && activeStyle,
							(currentPath === "/en" || currentPath === "/bn") && item.href === "/" && activeStyle,
						)}
						href={item.href}
					>
						{item.label}
					</LinkTo>
				);
			})}

			<LangSwitcher />

			<div>
				{doctorSession ? (
					<LinkTo href={"/admin"} className={buttonVariants({ className: "rounded-full" })}>
						{dashboardText}
					</LinkTo>
				) : !isLogin ? (
					<LinkTo href={"/login"} className={buttonVariants({ className: "rounded-full" })}>
						{loginText}
					</LinkTo>
				) : (
					<UserProfileWhenLogin />
				)}
			</div>
		</div>
	);
};

const UserProfileWhenLogin = () => {
	return (
		<div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="secondary" size="icon" className="rounded-full">
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
	);
};
