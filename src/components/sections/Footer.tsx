// import { footerInfo } from "@/data";
import React from "react";
import { Logo } from "../global";

interface Props extends React.ComponentPropsWithoutRef<"footer"> {
	dictionary: any;
}

export const Footer = ({ dictionary }: Props) => {
	console.log("🚀 ~ Footer ~ dictionary:", dictionary?.workingTime_day);
	const footerInfo = [
		{
			context: dictionary.footerInfo.contact.title,
			info: dictionary.footerInfo.contact.value,
		},
		{
			context: dictionary.footerInfo.address.title,
			info: dictionary.footerInfo.address.value,
		},
		{
			context: dictionary.footerInfo.certificateNo.title,
			info: dictionary.footerInfo.certificateNo.value,
		},
	];

	return (
		<footer className="container flex w-full flex-col items-start justify-between gap-y-5 rounded-t-3xl bg-[#e8f1f9] py-6 md:flex-row md:items-center 2xl:mt-8">
			<div className="grid w-full grid-cols-2 items-start justify-between md:w-fit md:grid-cols-1 md:gap-y-2">
				<Logo href={"/"} />
				<div className="flex w-full flex-col justify-end text-end md:text-start">
					<p> {dictionary?.workingTime_title}</p>
					<p className="space-x-1 mini:space-x-5">
						<span>{dictionary?.workingTime_day}</span>
						<span>{dictionary?.workingTime_time}</span>
					</p>
				</div>
			</div>
			<div className="grid w-full flex-1 grid-cols-1 gap-y-6 px-3 mini:px-5 md:grid-cols-4">
				<div className="hidden md:block"></div>
				{footerInfo.map((data) => (
					<div key={data.context + data.info}>
						<p className="mb-2 font-grotesk text-base font-bold text-main-400 2xl:text-2xl">
							{data.context}
						</p>
						{Array.isArray(data.info) ? (
							<ul>
								{data.info.map((info) => (
									<li
										className="text-sm font-semibold text-main-600 2xl:text-xl"
										key={info}
									>
										{info}
									</li>
								))}
							</ul>
						) : (
							<p className="text-sm font-semibold text-main-600 2xl:text-xl">
								{data.info}
							</p>
						)}
					</div>
				))}
			</div>
		</footer>
	);
};
