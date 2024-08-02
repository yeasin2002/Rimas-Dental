import React from "react";
import Link from "next/link";
import { convertEnglishToBengaliNumber } from "@/utils";

const menuItems = [
	{
		label: "হোম",
		href: "/",
	},
	{
		label: "আমাদের সম্পর্কে",
		href: "/about-us",
	},
	{
		label: "সার্ভিসসমূহ",
		href: "/services",
	},
];

const AboutFooter = () => {
	return (
		<div>
			<footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
				<p className="text-xs text-gray-500 dark:text-gray-400 2xl:text-xl">
					©{convertEnglishToBengaliNumber(new Date().getFullYear().toString())}{" "}
					<span>{`Rima's`} Dental. সমস্ত স্বত্ব সংরক্ষিত.</span>
				</p>
				<nav className="flex gap-4 sm:ml-auto sm:gap-6">
					{menuItems.map((items) => (
						<Link
							key={items.href}
							className="text-xs underline-offset-4 hover:underline 2xl:text-xl"
							href={items.href}
							rel="ugc"
						>
							{items.label}
						</Link>
					))}
				</nav>
			</footer>
		</div>
	);
};

export default AboutFooter;
