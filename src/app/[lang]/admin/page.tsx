import {
	AppointmentManage,
	DashboardStates,
	PatientScheduleManagement,
} from "@/components/dashboard";

const Admin = async () => {
	return (
		<section className="px-4 py-2">
			<DashboardStates />
			<AppointmentManage />
			{/*Todo: Need to add a States with ui/Tab */}
			<PatientScheduleManagement className="mt-10" />
		</section>
	);
};

export default Admin;
