import { getAllDoctors } from "@/actions/doctors.actions/doctor-queries.actions";

import React from "react";
import { ShowDoctorList } from "./ShowDoctorList";
import { ShowPendingDoctorList } from "./ShowPendingDoctors";

const Doctors = async () => {
	const data = await getAllDoctors();

	return (
		<div>
			<ShowDoctorList doctors={data?.data?.doctors!} />
			<ShowPendingDoctorList doctors={data?.data?.pendingDoctors!} />
		</div>
	);
};

export default Doctors;



export async function generateStaticParams() {
	return [{ lang: "bn" }, { lang: "en" }];
}
