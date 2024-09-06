import Image from "next/image";
import doctorImg from "@/assets/temp/doctor-3.jpg";
import React from "react";
import { BlurFade, SlightFlip } from "@/components/magicui";

interface Props extends React.ComponentProps<"div"> {
	dictionary: any;
}

export const SpeechOfCEO = ({ dictionary, ...props }: Props) => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32" {...props}>
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
					<BlurFade delay={0.25} inView>
						<Image
							src={doctorImg}
							width={550}
							height={550}
							alt="Dr. Sharmin Akter Rima"
							className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
						/>
					</BlurFade>

					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold sm:text-4xl md:text-5xl 2xl:text-6xl">{dictionary?.CeoName}</h2>
							<p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl 2xl:text-2xl">
								{dictionary?.speech}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
