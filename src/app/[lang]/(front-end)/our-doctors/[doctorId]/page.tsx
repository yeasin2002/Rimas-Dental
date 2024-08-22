import React from "react";
import { DoctorProfile } from "./DoctorsProfile";
import { DoctorIdNav } from "./DoctorIdNav";

interface Props {
	params: { doctorId: string };
}

const DoctorDetailsById = ({ params }: Props) => {
	return (
		<div className="p-4">
			{/* <DoctorIdNav /> */}
			<DoctorProfile />
		</div>
	);
};

export default DoctorDetailsById;
