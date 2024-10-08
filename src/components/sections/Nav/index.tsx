import { Logo } from "@/components";
import React from "react";

import { LargeNav } from "./LargeNav";
import { MobileNav } from "./MobileNav";
import { Session } from "next-auth";

interface Props extends React.ComponentProps<"nav"> {
	dictionary?: any;
	doctorSession: Session | null;
}

export const Nav = async ({ dictionary, doctorSession, ...props }: Props) => {
	const rootMenuItems = [
		{
			label: dictionary?.home,
			href: "/",
		},
		{
			label: dictionary?.about_us,
			href: "/about-us",
		},
		{
			label: dictionary?.services,
			href: "/services",
		},
	];
	return (
		<nav
			{...props}
			className="sticky top-0 z-50 flex w-full items-center justify-between bg-white px-4 py-3 mini:px-8 2xl:px-10 2xl:py-4"
		>
			<Logo href={"/"} />
			<>
				<MobileNav className="flex sm:hidden" rootMenuItems={rootMenuItems} login={dictionary?.login} />
				<LargeNav
					className="hidden sm:flex"
					rootMenuItems={rootMenuItems}
					loginText={dictionary?.login}
					dashboardText={dictionary?.dashboard}
					doctorSession={doctorSession}
				/>
			</>
		</nav>
	);
};
