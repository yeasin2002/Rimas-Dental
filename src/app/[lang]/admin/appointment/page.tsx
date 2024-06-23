import { AppointmentManage, PatientScheduleManagement } from "@/components";
import React from "react";


const Appointment = () => {
	return (
		<section className="p-4">
			<AppointmentManage />
			<PatientScheduleManagement />
		</section>
	);
};

export default Appointment;
