import React from "react";
import { TeamCard } from "../ui/Cards/TeamCard";
interface Props extends React.ComponentProps<"div"> {}

export const OurTeam = (props: Props) => {
	return (
		<section {...props} className="container py-4">
			<div className="space-y-2 *:text-center">
				<p className="text-yellowOrange-100 font-semibold">
					EXPERT & PROFESSIONAL
				</p>
				<h4 className="text-deepBlue-100 font-grotesk text-3xl font-bold">
					Our Dedicated Dental Team
				</h4>
				<p className="text-deepBlue-100/80 mx-auto mt-2 max-w-prose font-grotesk text-lg">
					Lectus Urna Duis Convallis Convallis Tellus Id. Odio Ut Enim Blandit
					Volutpat Maecenas Volutpat Blandit.
				</p>
			</div>

			<div className="mt-5 grid grid-cols-2 gap-8 px-10 ">
				<TeamCard />
				<TeamCard />
			</div>
		</section>
	);
};
