import { Button, DashboardNav, DoctorsCards } from "@/components";
import React from "react";

const Doctors = () => {
	return (
		<div>
			<DashboardNav />
			<section className="p-4">
				<div className="mb-8 mt-2">
					<div>
						<h1 className="font-grotesk text-4xl font-bold text-main-400 sm:text-5xl md:text-6xl lg:text-7xl">
							Doctors
						</h1>
						<p> Your Devoted and Knowledgeable Doctors</p>
					</div>
				</div>
				<div className="mt-10 grid grid-cols-2 gap-2 md:gap-x-8 lg:gap-x-10 xl:gap-x-14">
					<DoctorsCards className="max-w-full" imageClassName="h-80" />
					<DoctorsCards className="max-w-full" imageClassName="h-80" />
				</div>
			</section>
		</div>
	);
};

export default Doctors;
