import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const OurStory = (props: Props) => {
	return <div {...props}>OurStory</div>;
};
