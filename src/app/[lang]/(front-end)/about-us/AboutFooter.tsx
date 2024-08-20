import React from "react";
import Link from "next/link";
import { convertEnglishToBengaliNumber } from "@/utils";
import { getDictionary } from "@/Internationalization";
import { LinkTo } from "@/components";

interface Props {
	lang: string;
}

const AboutFooter = async ({ lang, ...props }: Props) => {
	const dictionary = await getDictionary(lang, "root_menu");

	const menuItems = [
		{
			label: dictionary.home,
			href: "/",
		},
		{
			label: dictionary.about_us,
			href: "/about-us",
		},
		{
			label: dictionary.services,
			href: "/services",
		},
	];
	return (
		<div>
			<footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
				<p className="text-xs text-gray-500 dark:text-gray-400 2xl:text-xl">
					©{convertEnglishToBengaliNumber(new Date().getFullYear().toString())}{" "}
					<span>{`Rima's`} Dental.</span>
					<span className="mx-1">
						{lang === "bn" ? "সমস্ত স্বত্ব সংরক্ষিত." : "All Rights Reserved."}
					</span>
				</p>
				<nav className="flex gap-4 sm:ml-auto sm:gap-6">
					{menuItems.map((items) => (
						<LinkTo
							key={items.href}
							className="text-xs underline-offset-4 hover:underline 2xl:text-xl"
							href={items.href}
							// rel="ugc"
						>
							{items.label}
						</LinkTo>
					))}
				</nav>
			</footer>
		</div>
	);
};

export default AboutFooter;
