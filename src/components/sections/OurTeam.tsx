import { baloo } from "@/fonts";
import React from "react";
import { TeamCard } from "../Cards/TeamCard";
import { getAllDoctors } from "@/actions/doctors.actions/doctor-queries.actions";
interface Props extends React.ComponentProps<"div"> {
	dictionary: any;
}

export const OurTeam = async ({ dictionary, ...props }: Props) => {
	const doctorsList = await getAllDoctors();

	return (
		<section
			{...props}
			className="home_sections-container mt-10 md:container md:py-6 2xl:pt-16"
		>
			<div className="space-y-2 *:text-center">
				<p className="font-semibold text-yellowOrange-100 2xl:text-3xl">
					{dictionary.subHeading}
				</p>
				<h2
					className={`font-grotesk text-2xl font-bold text-deepBlue-100 mini:text-3xl 2xl:text-5xl`}
				>
					{dictionary.heading}
				</h2>
				<p className="mx-auto mt-2 max-w-prose text-left font-grotesk text-lg text-deepBlue-100/80 2xl:mt-4 2xl:text-2xl">
					{dictionary.desc}
				</p>
			</div>

			<div className="min:px-5 mt-5 grid grid-cols-1 gap-8 px-3 md:grid-cols-2 2xl:gap-x-12">
				{doctorsList?.data?.doctors.map((doctor) => {
					return <TeamCard key={doctor._id} doctor={doctor} />;
				})}
			</div>
		</section>
	);
};
