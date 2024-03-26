import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const Hero = (props: Props) => {
	return <div {...props}>Hero</div>;
};
