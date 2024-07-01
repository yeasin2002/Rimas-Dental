import { Home, Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { logoutWithAuthJs } from "@/actions";
import { Doctor02, LinkTo } from "@/components";
import { dashboardNav } from "@/data/navItems";
import { cn } from "@/utils";
import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const DashboardNav = ({ ...props }: Props) => {
	return (
		<header
			{...props}
			className={cn(
				"sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6",
				props.className,
			)}
		>
			<nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
				<LinkTo
					href={"/"}
					className="flex items-center gap-2 text-lg font-semibold md:text-base"
				>
					<Home className="h-6 w-6" />
				</LinkTo>
				{dashboardNav?.map((item) => (
					<LinkTo
						key={item.title}
						href={"/admin" + item.link}
						className="capitalize text-foreground transition-colors hover:text-foreground"
					>
						{item.title}
					</LinkTo>
				))}
			</nav>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="shrink-0 md:hidden">
						<Menu className="h-5 w-5" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<nav className="grid gap-6 text-lg font-medium">
						<LinkTo
							href={"/"}
							className="flex items-center gap-2 text-lg font-semibold"
						>
							<Home className="h-6 w-6" />
						</LinkTo>

						{dashboardNav.map((item) => (
							<Link
								key={item.title}
								href={item.link}
								className="hover:text-foreground"
							>
								{item.title}
							</Link>
						))}
					</nav>
				</SheetContent>
			</Sheet>
			<div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="secondary" size="icon" className="rounded-full">
							<Doctor02 className="size-5" />
							<span className="sr-only">Toggle user menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Settings</DropdownMenuItem>
						<DropdownMenuItem>Support</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={logoutWithAuthJs}>
							Logout
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
};
