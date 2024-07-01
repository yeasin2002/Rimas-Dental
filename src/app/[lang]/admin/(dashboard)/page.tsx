import { auth } from "@/auth";
import { DashboardAnalytics, DashboardStates } from "@/components/dashboard";

const Admin = async () => {
	const session = await auth();
	console.log("🚀 ~ Admin ~ session:", session);
	return (
		<section className="space-y-16 px-4 py-2">
			<DashboardStates />
			<DashboardAnalytics />
		</section>
	);
};

export default Admin;
