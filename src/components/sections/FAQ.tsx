import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui";

import { faqData } from "@/data";
import { baloo } from "@/fonts";

import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const FAQ = (props: Props) => {
	return (
		<div {...props} className="home_sections-container container">
			<h4
				className={`mt-8 py-4 font-grotesk text-4xl font-bold text-main-400 ${baloo.className}`}
			>
				সচরাচর প্রশ্নের উত্তর
			</h4>

			<div className="grid grid-cols-1 gap-2 md:grid-cols-2">
				{faqData.map((faq) => (
					<Accordion type="single" collapsible key={faq.question}>
						<AccordionItem value={faq.question} className="border-none">
							<AccordionTrigger className="rounded-3xl text-xs sm:text-xs md:text-sm xl:text-lg 2xl:text-xl">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					</Accordion>
				))}
			</div>
		</div>
	);
};
