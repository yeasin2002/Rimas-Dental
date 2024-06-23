import { LinkTo } from "@/components";
import React from "react";

const Register = () => {
	return (
		<div className="flex flex-col items-center justify-center py-20">
			<h3>You {`can's `} register yourself</h3>
			<p>Only doctors can register you as an user.</p>
			<p className="mt-5">
				book your
				<LinkTo href={"/about-us"} className="mx-1 text-main-400">
					appointment
				</LinkTo>
				with doctor and get treatment.
			</p>
		</div>
	);
};

export default Register;
