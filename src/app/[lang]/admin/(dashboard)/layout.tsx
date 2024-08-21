import { redirect_server } from "@/actions/utils.actions";
import { auth } from "@/auth";
import { DashboardNav } from "@/components/dashboard";
import React from "react";

export const metadata = {
	title: "Admin Dashboard",
};

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await auth();
	if (!session) return redirect_server("/en/admin/login");

	return (
		<>
			<DashboardNav />
			{children}
		</>
	);
};

export default AdminLayout;
