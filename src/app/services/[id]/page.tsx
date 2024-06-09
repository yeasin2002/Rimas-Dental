import { getSingleServerData } from "@/utils";
import React from "react";

interface SingleServicesProps {
	params: {
		id: string;
	};
}

const SingleServices = ({ params }: SingleServicesProps) => {
	const content = getSingleServerData(params.id);
	console.log("🚀 ~ SingleServices ~ content:", content);
	return (
		<div>
			SingleServices
			<p>Params :{params.id}</p>
		</div>
	);
};

export default SingleServices;
