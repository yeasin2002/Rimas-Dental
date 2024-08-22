import React from "react";
import { Button, DoctorsCards } from "@/components";
import { Doctor } from "@/types";

interface Props extends React.ComponentProps<"div"> {
	doctors: Doctor[];
}

export const ShowPendingDoctorList = ({ doctors, ...props }: Props) => {
	if (doctors.length == 0) return "";
	return (
		<section className="p-4" {...props}>
			<div className="mt-2">
				<div>
					<h1 className="font-grotesk text-4xl font-bold text-main-400 sm:text-5xl md:text-6xl lg:text-7xl">
						Pending Doctors
					</h1>
					<p>Who registered as a doctor</p>
				</div>
			</div>
			<div className="mt-10 grid grid-cols-2 gap-x-4">
				{doctors.map((doctor) => (
					<DoctorsCards
						className="max-w-full"
						imageClassName={"h-96"}
						key={doctor._id}
						data= {doctor}
					/>
				))}
			</div>
		</section>
	);
};
