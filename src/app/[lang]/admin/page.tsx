import React from "react";
import { AppointmentManage, DashboardStates } from "./_components";

const Admin = async () => {
	return (
		<section className="px-4 py-2">
			<DashboardStates />
			<AppointmentManage />
		</section>
	);
};

export default Admin;
