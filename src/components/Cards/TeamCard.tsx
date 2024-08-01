import React from "react";
interface Props extends React.ComponentProps<"div"> {}

import doctorIcon from "@/assets/temp/doctor-3.jpg";
import { FacebookLogo, WhatsappLogo } from "@/components/icons";
import Image from "next/image";

export const TeamCard = (props: Props) => {
	return (
		<div
			{...props}
			className="flex flex-col place-items-center rounded-lg border-2 border-gray-500/40 bg-gray-50 py-2 md:py-5"
		>
			<Image
				src={doctorIcon}
				alt="Doctor"
				width={200}
				height={200}
				className="rounded-full 2xl:size-60"
			/>
			<h5 className="mt-4 text-nowrap text-2xl font-semibold text-deepBlue-100 2xl:text-3xl">
				Sharmin Akter Rima
			</h5>
			<p className="mt-1 text-lg font-semibold text-main-500 2xl:text-xl">
				Oral Surgeon
			</p>
			<div className="mt-4 flex items-center gap-3">
				<a
					href="https://www.facebook.com/"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-x-2 2xl:text-xl"
				>
					<FacebookLogo className="size-6 2xl:size-10" />
					<span>Rima Akter</span>
				</a>
				<a
					href="tel:01932227965"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-x-2 2xl:text-xl"
				>
					<WhatsappLogo className="size-6 2xl:size-10" />
					<span>01932227965</span>
				</a>
			</div>
		</div>
	);
};
