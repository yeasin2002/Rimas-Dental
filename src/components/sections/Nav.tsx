import { Button, Logo } from "@/components";
import { MoveRight } from "lucide-react";
import React from "react";
import { FacebookLogo } from "../icons";

interface Props extends React.ComponentProps<"nav"> {}

export const Nav = (props: Props) => {
	return (
		<nav
			{...props}
			className="mini:container flex  items-center  justify-between  py-3 md:py-4  "
		>
			<Logo />
			<div className="flex items-center justify-between gap-x-0 sm:gap-x-2 ">
				<Button className=" px-4 py-2  sm:px-8 sm:py-6">
					Book Appointment
					<MoveRight className="mini:block ml-2 hidden " />
				</Button>
				<FacebookLogo className="hidden  size-10 sm:block " />
			</div>
		</nav>
	);
};
