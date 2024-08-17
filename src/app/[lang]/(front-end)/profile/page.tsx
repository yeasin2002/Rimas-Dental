import Image from "next/image";
import React from "react";

const DentalPatientProfile = () => {
	return (
		<div className="min-h-screen bg-gray-100">
			<div className="container mx-auto p-6">
				<div className="rounded-lg bg-white p-6 shadow-lg">
					{/* Header */}
					<div className="mb-6 flex items-center">
						<Image
							src="https://via.placeholder.com/100"
							alt="Patient"
							className="mr-6 h-24 w-24 rounded-full"
							width={500}
							height={500}
						/>
						<div>
							<h1 className="text-2xl font-bold">John Doe</h1>
							<p className="text-gray-600">Age: 35 | Gender: Male</p>
						</div>
					</div>

					{/* Contact Information */}
					<div className="mb-6">
						<h2 className="mb-2 text-xl font-semibold">Contact Information</h2>
						<p>Phone: (123) 456-7890</p>
						<p>Email: johndoe@example.com</p>
						<p>Address: 123 Main St, Anytown, USA 12345</p>
					</div>

					{/* Dental History */}
					<div className="mb-6">
						<h2 className="mb-2 text-xl font-semibold">Dental History</h2>
						<p>Member Status: Active</p>
						<p>Registration Date: 01/01/2020</p>
						<p>Last Appointment: 03/15/2024</p>
					</div>

					{/* Upcoming Appointments */}
					<div className="mb-6">
						<h2 className="mb-2 text-xl font-semibold">
							Upcoming Appointments
						</h2>
						<div className="rounded bg-gray-100 p-4">
							<p className="font-semibold">04/30/2024 - 10:00 AM</p>
							<p>Dental Cleaning</p>
							<p>Dr. Sarah Smith</p>
						</div>
					</div>

					{/* Medical Records & Documents */}
					<div className="mb-6">
						<h2 className="mb-2 text-xl font-semibold">
							Medical Records & Documents
						</h2>
						<ul className="list-disc pl-5">
							<li>Dental X-Ray (03/15/2024)</li>
							<li>Treatment Plan (02/01/2024)</li>
						</ul>
						<button className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
							Add New Document
						</button>
					</div>

					{/* Notes */}
					<div className="mb-6">
						<h2 className="mb-2 text-xl font-semibold">Notes</h2>
						<textarea
							className="h-32 w-full rounded border p-2"
							placeholder="Add notes here..."
						></textarea>
					</div>

					{/* Quick Actions */}
					<div className="flex justify-end">
						<button className="mr-2 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
							Send Message
						</button>
						<button className="rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-600">
							Edit Patient
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DentalPatientProfile;
