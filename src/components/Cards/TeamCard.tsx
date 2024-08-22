import React from "react";
interface Props extends React.ComponentProps<"div"> {
	doctor: Doctor;
}

import doctorIcon from "@/assets/temp/doctor-3.jpg";
import { FacebookLogo, WhatsappLogo } from "@/components/icons";
import Image from "next/image";
import { Doctor } from "@/types";

export const TeamCard = ({ doctor, ...props }: Props) => {
	return (
		<div
			{...props}
			className="flex flex-col place-items-center rounded-lg border-2 border-gray-500/40 bg-gray-50 py-2 md:py-5"
		>
			<Image
				src={doctor?.profileImage}
				alt="Doctor"
				width={300}
				height={300}
				className="inline-block size-72 rounded-full object-cover object-center ring ring-main-500"
			/>
			<h5 className="mt-4 text-nowrap text-2xl font-semibold text-deepBlue-100 2xl:text-3xl">{doctor.name}</h5>
			<p className="mt-1 text-lg font-semibold text-main-500 2xl:text-xl">{doctor.specialization}</p>
			<div className="mt-4 flex items-center gap-3">
				{doctor.facebook.link && (
					<a
						href={doctor.facebook.link}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-x-2 2xl:text-xl"
					>
						<FacebookLogo className="size-6 2xl:size-10" />
						<span>{doctor.facebook.name}</span>
					</a>
				)}

				<a
					href="tel:01932227965"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-x-2 2xl:text-xl"
				>
					<WhatsappLogo className="size-6 2xl:size-10" />
					<span> {doctor.phone}</span>
				</a>
			</div>
		</div>
	);
};
