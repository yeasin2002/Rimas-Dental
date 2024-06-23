import React from "react";
import { InitialChart } from "../charts";
interface Props extends React.ComponentProps<"div"> {}

export const DashboardAnalytics = ({ ...props }: Props) => {
	return (
		<div {...props} className="space-y-10">
			<div>
				<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
					Schedule Count
				</h3>
				<InitialChart />
			</div>
		</div>
	);
};
