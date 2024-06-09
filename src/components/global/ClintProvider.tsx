import React from "react";
interface Props {
	children: React.ReactNode;
}

export const ClintProvider = ({ children }: Props) => {
	return <div>{children}</div>;
};
