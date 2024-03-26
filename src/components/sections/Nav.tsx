import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const Nav = (props: Props) => {
	return <div {...props}>Nav</div>;
};
