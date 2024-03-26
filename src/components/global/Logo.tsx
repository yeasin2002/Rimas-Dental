import theeth from "@/assets/icons/teeths/tooth.svg";
import Image from "next/image";

import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const Logo = (props: Props) => {
	return (
		<div {...props} className="flex items-center justify-center">
			<Image src={theeth} alt="theeth" sizes={"100"} className="size-12  " />
			<p className="ml-2 text-2xl font-bold text-main-400">{`Rima's`} Dental</p>
		</div>
	);
};
