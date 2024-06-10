import theeth from "@/assets/icons/teeths/flaticons/teeth.svg";
import Image from "next/image";

import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const Logo = (props: Props) => {
	return (
		<div {...props} className="flex items-center justify-center">
			<Image src={theeth} alt="theeth" sizes={"100"} className="size-10" />
			<p className="ml-2 font-grotesk text-xl font-bold text-main-400 md:text-2xl">
				{`Rima's`} Dental
			</p>
		</div>
	);
};
