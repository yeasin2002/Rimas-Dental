import React from "react";
import { DashboardNav } from "./_components";

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
