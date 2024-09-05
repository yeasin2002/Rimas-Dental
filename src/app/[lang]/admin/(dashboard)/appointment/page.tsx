import { AppointmentManage, PatientScheduleManagement } from "@/components";
import React from "react";

export async function generateStaticParams() {
	return [{ lang: "bn" }, { lang: "en" }];
}

const Appointment = () => {
	return (
		<section className="space-y-20 p-4">
			<AppointmentManage />
			<PatientScheduleManagement />
		</section>
	);
};

export default Appointment;
