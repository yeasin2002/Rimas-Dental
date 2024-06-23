import doctorIcon from "@/assets/temp/doctor-3.jpg";
import { Mail, MapPin, SquareUser } from "lucide-react";
import Image from "next/image";
import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const DoctorsCards = ({ ...props }: Props) => {
	return (
		<div {...props}>
			<div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
				<Image
					className="h-56 w-full object-cover object-center"
					src={doctorIcon}
					alt="Doctor"
				/>

				<div className="px-6 py-4">
					<h1 className="text-xl font-semibold text-gray-800 dark:text-white">
						Dr. Farhana Rahman
					</h1>
					<p className="py-2 text-gray-700 dark:text-gray-400">
						An experienced internal medicine physician dedicated to providing
						compassionate and personalized care. With over 15 years in the
						field, she specializes in managing chronic conditions and promoting
						overall wellness.
					</p>
					<div className="mt-4 flex items-center text-gray-700 dark:text-gray-200">
						<SquareUser />
						<h1 className="px-2 text-sm">01234567890</h1>
					</div>
					<div className="mt-4 flex items-center text-gray-700 dark:text-gray-200">
						<MapPin />
						<h1 className="px-2 text-sm">Mirpur 14, Dhaka </h1>
					</div>
					<div className="mt-4 flex items-center text-gray-700 dark:text-gray-200">
						<Mail />
						<h1 className="px-2 text-sm">patterson@example.com</h1>
					</div>
				</div>
			</div>
		</div>
	);
};
