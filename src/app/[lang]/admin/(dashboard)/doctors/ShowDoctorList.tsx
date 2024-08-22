import React from "react";
import { Button, DoctorsCards } from "@/components";
import { Doctor } from "@/types";

import virusDisinfection from "@/assets/images/VirusDisinfection.gif";
import Image from "next/image";

interface Props extends React.ComponentProps<"div"> {
	doctors: Doctor[];
}

export const ShowDoctorList = ({ doctors, ...props }: Props) => {
	return (
		<section className="p-4" {...props}>
			<div className="mt-2">
				<div>
					<h1 className="font-grotesk text-4xl font-bold text-main-400 sm:text-5xl md:text-6xl lg:text-7xl">
						Doctors
					</h1>
					<p> Your Devoted and Knowledgeable Doctors</p>
				</div>
			</div>
			<div>
				{doctors.length === 0 ? (
					<div className="flex flex-col items-center justify-center">
						<Image
							src={virusDisinfection}
							alt="No Doctor"
							className="size-72"
						/>
						<p className="font-grotesk text-xl font-bold text-zinc-800 sm:text-2xl md:text-3xl lg:text-4xl">
							No doctors found
						</p>
					</div>
				) : (
					<div className="grid grid-cols-2 gap-x-4">
						{doctors.map((doctor) => (
							<DoctorsCards
								className="max-w-full"
								imageClassName={"h-96"}
								key={doctor._id}
                                data= {doctor}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
};
