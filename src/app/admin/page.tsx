import { redirect } from "next/navigation";
import React from "react";
import { Dashboard } from "./adminTemplates";

const Admin = async () => {
	const isAuth = true;
	if (!isAuth) {
		redirect("/admin/login");
	}

	return (
		<>
			<Dashboard />
		</>
	);
};

export default Admin;
