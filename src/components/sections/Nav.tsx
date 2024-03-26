import { Button, Logo } from "@/components";
import { MoveRight } from "lucide-react";
import React from "react";
import { FacebookLogo } from "../icons";

interface Props extends React.ComponentProps<"nav"> {}

export const Nav = (props: Props) => {
	return (
		<nav
			{...props}
			className="container flex items-center justify-between py-4"
		>
			<Logo />
			<div className="flex items-center justify-between gap-x-2 ">
				<Button className="px-8 py-6">
					Book Appointment
					<MoveRight className="ml-2" />
				</Button>
				<FacebookLogo className="size-10   " />
			</div>
		</nav>
	);
};
