"use client";

import { aboutState } from "@/data";
import React from "react";
import CountUp from "react-countup";
interface Props extends React.ComponentProps<"div"> {}

export const AboutState = ({ ...props }: Props) => {
	return (
		<section className="bg-gray-100 py-12 dark:bg-gray-950 md:py-16" {...props}>
			<div className="container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
					{aboutState.map((items) => {
						return (
							<div
								className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900"
								key={items.name}
							>
								<div className="flex items-center justify-between">
									<div>
										<h3 className="text-2xl font-bold text-primary">
											<div />
										</h3>
										<p className="capitalize text-gray-500 dark:text-gray-400">
											{items.name}
										</p>
									</div>
									<p className="text-4xl font-bold text-primary">
										<CountUp end={items.value} duration={items.duration} />
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
