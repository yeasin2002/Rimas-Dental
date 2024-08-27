import React from "react";
import ServiceForm from "./ServiceForm";
import { auth } from "@/auth";

const AddServicePage = async () => {
	const admin = await auth();

	return (
		<div className="min-h-screen bg-gray-100">
			<header className="bg-white shadow-md">
				<div className="container mx-auto px-4 py-6">
					<h1 className="text-3xl font-bold text-gray-800">Add New Service</h1>
				</div>
			</header>
			<ServiceForm doctorId={admin?.user?.id!} />
		</div>
	);
};

export default AddServicePage;
