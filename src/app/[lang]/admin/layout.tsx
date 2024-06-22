import React from "react";
import { DashboardNav } from "../../../components/dashboard";

export const metadata = {
	title: "Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<DashboardNav />
			{children}
		</>
	);
};

export default AdminLayout;
