import { AppointmentManage, PatientScheduleManagement } from "@/components";
import React from "react";

const Appointment = () => {
	return (
		<section className="space-y-20 p-4">
			<AppointmentManage />
			<PatientScheduleManagement />
		</section>
	);
};

export default Appointment;
