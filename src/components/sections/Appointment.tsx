import React from "react";

interface Props extends React.ComponentProps<"div"> {}

export const Appointment = (props: Props) => {
	return <div {...props}>Appointment</div>;
};
