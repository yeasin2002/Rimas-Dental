import React from "react";
import { DoctorProfile } from "./DoctorsProfile";

interface Props {
	params: { doctorId: string };
}

const DoctorDetailsById = ({ params }: Props) => {
	return (
		<div>
			<DoctorProfile />
		</div>
	);
};

export default DoctorDetailsById;
