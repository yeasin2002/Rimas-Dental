import { footerInfo } from "@/data";
import React from "react";
import { Logo } from "../global";

export const Footer = () => {
	return (
		<footer className="container flex w-full flex-col items-start justify-between gap-y-5 rounded-t-3xl bg-[#e8f1f9] py-6 sm:flex-row sm:items-center">
			<div className="grid w-full grid-cols-2 items-start justify-between md:w-fit md:grid-cols-1 md:gap-y-2">
				<Logo />
				<div className="flex w-full flex-col justify-end text-end md:text-start">
					<p>Working Hours</p>
					<p className="space-x-1 mini:space-x-5">
						<span>Wed -Mon</span>
						<span>5PM-9PM</span>
					</p>
				</div>
			</div>
			<div className="grid w-full flex-1 grid-cols-1 gap-y-6 px-3 mini:px-5 sm:grid-cols-4">
				<div className="hidden sm:block"></div>
				{footerInfo.map((data) => (
					<div key={data.context + data.info}>
						<p className="mb-2 font-grotesk text-base font-bold text-main-400">
							{data.context}
						</p>
						{Array.isArray(data.info) ? (
							<ul>
								{data.info.map((info) => (
									<li
										className="text-sm font-semibold text-main-600"
										key={info}
									>
										{info}
									</li>
								))}
							</ul>
						) : (
							<p className="text-sm font-semibold text-main-600">{data.info}</p>
						)}
					</div>
				))}
			</div>
		</footer>
	);
};
