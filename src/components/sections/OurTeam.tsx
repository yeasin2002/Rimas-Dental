import React from "react";
import { TeamCard } from "../ui/Cards/TeamCard";
interface Props extends React.ComponentProps<"div"> {}

export const OurTeam = (props: Props) => {
	return (
		<section {...props} className="mt-10 md:container md:py-6">
			<div className="space-y-2 *:text-center">
				<p className="font-semibold text-yellowOrange-100">
					EXPERT & PROFESSIONAL
				</p>
				<h4 className="font-grotesk text-3xl font-bold text-deepBlue-100">
					Our Dedicated Dental Team
				</h4>
				<p className="mx-auto mt-2 max-w-prose font-grotesk text-lg text-deepBlue-100/80">
					Lectus Urna Duis Convallis Convallis Tellus Id. Odio Ut Enim Blandit
					Volutpat Maecenas Volutpat Blandit.
				</p>
			</div>

			<div className="mt-5 grid grid-cols-1 gap-8 px-10 md:grid-cols-2">
				<TeamCard />
				<TeamCard />
			</div>
		</section>
	);
};
