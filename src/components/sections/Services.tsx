"use client";

import { ServicesCard } from "@/components/ui";
import { serviceData } from "@/data";
import React from "react";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props extends React.ComponentProps<"div"> {}

export const Services = (props: Props) => {
	return (
		<div {...props} className="mb-4 mt-10 px-4">
			<p className="text-center text-main-400">ADVANCED TECHNOLOGY</p>
			<h4 className="text-center font-grotesk text-3xl font-bold text-main-600">
				Complete Dental Services
			</h4>

			<Swiper
				className="my-6 px-4"
				spaceBetween={50}
				slidesPerView={1}
				breakpoints={{
					640: {
						slidesPerView: 2,
					},

					1024: {
						slidesPerView: 3,
					},
					1536: {
						slidesPerView: 4,
					},
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
