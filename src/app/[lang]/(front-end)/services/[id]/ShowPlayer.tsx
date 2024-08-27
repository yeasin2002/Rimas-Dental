"use client";

import { cn } from "@/utils";
import React from "react";
import ReactPlayer from "react-player";
interface Props extends React.ComponentProps<"div"> {
	url: string;
	playerClassName?: string;
}

export const ShowPlayer = ({ url, className, playerClassName, ...props }: Props) => {
	return (
		<div {...props} className={cn(className)}>
			<ReactPlayer url={url} width={"100%"} />
		</div>
	);
};
