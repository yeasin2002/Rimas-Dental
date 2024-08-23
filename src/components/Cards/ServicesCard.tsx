import Image from "next/image";
import React from "react";
import Link from "next/link";

import { ServiceData } from "@/data";
import { cn } from "@/utils";

interface Props extends React.ComponentProps<"div"> {
	data: ServiceData;
}

export const ServicesCard = ({ data, ...rest }: Props) => {
	return (
		<div {...rest} className="cursor-pointer rounded-2xl bg-[#fefbf4] p-4">
			<div className="inline-block rounded-full bg-main-600/60 p-4">
				<Image
					src={data.icon}
					alt={`${data.title} icon`}
					width={100}
					height={100}
					className="size-14 shadow-sm 2xl:size-20"
				/>
			</div>
			<h5 className="mt-2 font-grotesk text-2xl font-bold 2xl:mt-4 2xl:text-3xl">{data.title}</h5>
			<p className={cn("text-md py-3 2xl:text-lg")}>{data.desc}</p>

			<Link
				href={`/services/${data?.id}`}
				className="my-3 py-1 capitalize text-main-600 2xl:mt-2 2xl:text-xl"
				aria-label={`Learn more about  ${data.title}`}
			>
				Learn More
			</Link>
		</div>
	);
};
