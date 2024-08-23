import React from "react";
import { InitialChart } from "../charts";
interface Props extends React.ComponentProps<"div"> {}

export const DashboardAnalytics = ({ ...props }: Props) => {
	return (
		<div {...props} className="grid grid-cols-1 space-y-10 md:grid-cols-2 md:gap-x-2 md:space-y-0">
			<div>
				<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Appointments</h3>
				<InitialChart />
			</div>
			<div>
				<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Schedule</h3>
				<InitialChart />
			</div>
		</div>
	);
};
