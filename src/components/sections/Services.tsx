"use client";

import { ServicesCard } from "@/components/ui";
import { serviceData } from "@/data";
import React from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props extends React.ComponentProps<"div"> {
	dictionary: any;
}

export const Services = ({ dictionary, ...props }: Props) => {
	return (
		<div {...props} className="mb-4 mt-10 px-4">
			<p className="text-center text-main-400 2xl:text-2xl">{dictionary.home?.our_services?.mainSubHeading}</p>
			<h2 className="f ont-bold text-center font-grotesk text-3xl text-main-600 2xl:text-5xl">
				{dictionary.home?.our_services?.mainHeading}
			</h2>

			<Swiper
				className="my-6 px-4"
				spaceBetween={50}
				slidesPerView={1}
				breakpoints={{
					640: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
					1536: { slidesPerView: 4 },
				}}
			>
				{serviceData.map((data, index) => {
					return (
						<SwiperSlide key={index}>
							<ServicesCard data={data} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};
