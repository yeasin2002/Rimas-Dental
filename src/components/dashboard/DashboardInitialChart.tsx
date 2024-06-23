import React from "react";
import { InitialChart } from "../charts";
interface Props extends React.ComponentProps<"div"> {}

export const DashboardInitialChart = ({ ...props }: Props) => {
	return (
		<div {...props}>
			<InitialChart />
		</div>
	);
};
