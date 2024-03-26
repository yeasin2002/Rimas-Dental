import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const services = (props: Props) => {
	return <div {...props}>services</div>;
};
