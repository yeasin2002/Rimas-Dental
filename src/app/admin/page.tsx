import React from "react";
import { DashboardNav, SalesCards } from "./_components";

const Admin = async () => {
	return (
		<>
			<DashboardNav />
			<br />

			<SalesCards className="px-4" />
		</>
	);
};

export default Admin;
