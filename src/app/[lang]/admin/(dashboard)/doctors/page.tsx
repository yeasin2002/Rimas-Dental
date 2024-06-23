import { Button, DoctorsCards } from "@/components";
import React from "react";

const Doctors = () => {
	return (
		<section className="p-4">
			<div className="mb-8 mt-2">
				<div>
					<h1 className="font-grotesk text-4xl font-bold text-main-400 sm:text-5xl md:text-6xl lg:text-7xl">
						Doctors
					</h1>
					<p> Your Devoted and Knowledgeable Doctors</p>
				</div>
			</div>
			<div className="mt-10 grid grid-cols-2">
				<DoctorsCards />
				<DoctorsCards />
			</div>
		</section>
	);
};

export default Doctors;
