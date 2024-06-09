"use client";

import teethClean from "@/assets/images/teeth-clean.jpg";
import teethDirty from "@/assets/images/teeth-dirty .jpg";
import React from "react";
import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from "react-compare-slider";

interface Props extends React.ComponentProps<"div"> {}

export const TeethBeforeAndAfterEffects = (props: Props) => {
	return (
		<div {...props} className="container py-8">
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
