import { DashboardAnalytics, DashboardStates } from "@/components/dashboard";

const Admin = () => {
	return (
		<section className="space-y-16 px-4 py-2">
			<DashboardStates />
			<DashboardAnalytics />
		</section>
	);
};

export default Admin;
