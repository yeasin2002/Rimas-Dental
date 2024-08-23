import React from "react";
import ServiceForm from "./ServiceForm";

const AddServicePage = () => {
	return (
		<div className="min-h-screen bg-gray-100">
			<header className="bg-white shadow-md">
				<div className="container mx-auto px-4 py-6">
					<h1 className="text-3xl font-bold text-gray-800">Add New Service</h1>
				</div>
			</header>
			<ServiceForm />
		</div>
	);
};

export default AddServicePage;
