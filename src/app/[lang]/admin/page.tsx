import { DashboardInitialChart, DashboardStates } from "@/components/dashboard";

const Admin = async () => {
	return (
		<section className="space-y-20 px-4 py-2">
			<DashboardStates />
			<DashboardInitialChart />
		</section>
	);
};

export default Admin;
