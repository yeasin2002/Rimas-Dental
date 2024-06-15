import { redirect } from "next/navigation";
import React from "react";

const Admin = async () => {
	const isAuth = false;
	if (!isAuth) {
		redirect("/admin/login");
	}

	return <div>Admin</div>;
};

export default Admin;
