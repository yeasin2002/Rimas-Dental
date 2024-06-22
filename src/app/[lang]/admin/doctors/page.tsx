import { TeamCard } from "@/components/Cards/TeamCard";
import React from "react";

const Doctors = () => {
	return (
		<div className="grid grid-cols-2 gap-4 p-4">
			<TeamCard />
			<TeamCard />
		</div>
	);
};

export default Doctors;
