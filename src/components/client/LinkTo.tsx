"use client";

import Link, { LinkProps } from "next/link";
import { useParams } from "next/navigation";
import React from "react";

interface Props extends LinkProps {
	children: React.ReactNode;
	className?: string;
}

export const LinkTo = ({ href, children, ...props }: Props) => {
	const params = useParams();
	return (
		<Link href={`/${params?.lang}${href}`} {...props}>
			{children}
		</Link>
	);
};
