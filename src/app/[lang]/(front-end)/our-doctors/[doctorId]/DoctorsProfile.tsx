import Image from "next/image";
import React from "react";
import { DoctorIdNav } from "./DoctorIdNav";

interface Props extends React.ComponentPropsWithoutRef<"div"> {}

export const DoctorProfile = ({ ...props }: Props) => {
	return (
		<div>
			<div
				className="container mx-auto min-h-screen rounded-lg bg-gray-100 p-6 shadow-md"
				aria-label="doctor profile"
				{...props}
			>
				<div className="mb-6 flex items-center">
					<Image
						src={
							"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						alt="Doctor"
						className="mr-6 h-24 w-24 rounded-full"
						width={500}
						height={500}
					/>
					<div>
						<h2 className="text-2xl font-semibold">Dr. Adam H.</h2>
						<p className="text-gray-600">Dentist</p>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div>
						<h3 className="mb-2 text-xl font-semibold">Personal Information</h3>
						<p>
							<strong>Email:</strong> dr.adam@example.com
						</p>
						<p>
							<strong>Phone:</strong> (555) 123-4567
						</p>
						<p>
							<strong>Gender:</strong> Male
						</p>
						<p>
							<strong>Address:</strong> 7898 Marsh Ln Richardson, Wisconsin
							35697
						</p>
					</div>
					<div>
						<h3 className="mb-2 text-xl font-semibold">Professional Details</h3>
						<p>
							<strong>Specialization:</strong> General Dentistry
						</p>
						<p>
							<strong>Years of Experience:</strong> 10
						</p>
						<p>
							<strong>Role:</strong> Doctor
						</p>
					</div>
				</div>
				<div className="mt-6">
					<h3 className="mb-2 text-xl font-semibold">Bio</h3>
					<p className="text-gray-700">
						Dr. Adam is a highly skilled dentist with over 10 years of
						experience in general dentistry. He specializes in preventive care,
						cosmetic dentistry, and restorative procedures.
					</p>
				</div>
				<div className="mt-6">
					<h3 className="mb-2 text-xl font-semibold">Services</h3>
					<ul className="list-inside list-disc">
						<li>Consultation</li>
						<li>Scaling</li>
						<li>Root Canal</li>
						<li>Bleaching</li>
						<li>Wisdom Teeth Removal</li>
					</ul>
				</div>
				<div className="mt-6">
					<h3 className="mb-2 text-xl font-semibold">Statistics</h3>
					<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
						<div className="rounded-lg bg-blue-100 p-4">
							<p className="text-2xl font-bold">26</p>
							<p className="text-sm text-gray-600">Pending Approvals</p>
						</div>
						<div className="rounded-lg bg-green-100 p-4">
							<p className="text-2xl font-bold">14</p>
							<p className="text-sm text-gray-600">Upcoming Appointments</p>
						</div>
						<div className="rounded-lg bg-yellow-100 p-4">
							<p className="text-2xl font-bold">10</p>
							<p className="text-sm text-gray-600">Patients This Month</p>
						</div>
						<div className="rounded-lg bg-purple-100 p-4">
							<p className="text-2xl font-bold">103</p>
							<p className="text-sm text-gray-600">Total Patients</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
