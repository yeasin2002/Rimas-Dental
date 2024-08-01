"use client";

import teethClean from "@/assets/images/teeth-clean.webp";
import teethDirty from "@/assets/images/teeth-dirty .webp";
import { baloo } from "@/fonts";
import React from "react";
import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";

interface Props extends React.ComponentProps<"div"> {}

export const TeethBeforeAndAfterEffects = (props: Props) => {
	return (
		<div {...props} className="home_sections-container container">
			<h2
				className={`my-5 font-grotesk text-2xl font-bold text-deepBlue-100 mini:text-3xl 2xl:text-5xl ${baloo.className}`}
			>
				সেবার গ্রহণের আগে ও পরে
			</h2>

			<ReactCompareSlider
				itemOne={
					<ReactCompareSliderImage
						src={teethClean.src}
						alt="Clean Teeth "
						className="aspect-video rounded-lg lg:max-h-96 2xl:max-h-[30rem]"
						aria-label="Clean Teeth"
					/>
				}
				itemTwo={
					<ReactCompareSliderImage
						src={teethDirty.src}
						alt="Dirty Teeth "
						className="aspect-video rounded-lg lg:max-h-96 2xl:max-h-[30rem]"
						aria-label="Dirty Teeth"
					/>
				}
			/>
		</div>
	);
};
