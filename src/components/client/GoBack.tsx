"use client";

import { useRouter } from "next/navigation";
import React from "react";
interface Props extends React.ComponentProps<"button"> {}

export const GoBack = ({ ...props }: Props) => {
	const router = useRouter();
	return (
		<button {...props} onClick={() => router.back()}>
			{props.children}
		</button>
	);
};
