import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const Footer = (props: Props) => {
	return <div {...props}>Footer</div>;
};
