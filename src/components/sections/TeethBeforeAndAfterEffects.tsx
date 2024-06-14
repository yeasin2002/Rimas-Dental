"use client";

import teethClean from "@/assets/images/teeth-clean.jpg";
import teethDirty from "@/assets/images/teeth-dirty .jpg";
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
			<h4
				className={`my-5 font-grotesk text-2xl font-bold text-deepBlue-100 mini:text-3xl ${baloo.className}`}
			>
				সেবার গ্রহণের আগে ও পরে
			</h4>

			<ReactCompareSlider
				itemOne={
					<ReactCompareSliderImage
						src={teethClean.src}
						alt="Clean Teeth "
						className="rounded-lg"
					/>
				}
				itemTwo={
					<ReactCompareSliderImage
						src={teethDirty.src}
						alt="Dirty Teeth "
						className="rounded-lg"
					/>
				}
			/>
		</div>
	);
};
