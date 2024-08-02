import Image from "next/image";
import doctorImg from "@/assets/temp/doctor-3.jpg";
import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const SpeechOfCEO = ({ ...props }: Props) => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32" {...props}>
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
					<Image
						src={doctorImg}
						width={550}
						height={550}
						alt="Dr. Sharmin Akter Rima"
						className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
					/>
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl 2xl:text-6xl">
								ডা. শারমিন আকতার রিমা
							</h2>
							<p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl 2xl:text-2xl">
								রিমাস ডেন্টার ক্লিনিক ৫ বছর ধরে উচ্চ মানের ডেন্টাল কেয়ার প্রদান করে আসছে।
								উন্নত প্রযুক্তি এবং অভিজ্ঞ ডেন্টিস্টদের মাধ্যমে প্রতিটি রোগীর জন্য
								ব্যক্তিগতকৃত সেবা নিশ্চিত করা হয়। নিয়মিত ডেন্টাল চেকআপ থেকে রুট ক্যানাল
								থেরাপি এবং ডেন্টাল ইমপ্ল্যান্ট পর্যন্ত সব ধরনের সেবা প্রদান করা হয়। ব্যথামুক্ত
								এবং স্বাচ্ছন্দ্যময় চিকিৎসা প্রক্রিয়া নিশ্চিত করতে আধুনিক সরঞ্জাম ব্যবহার করা হয়।
								ডেন্টার ক্লিনিকের লক্ষ্য হল প্রতিটি রোগীর দাতের স্বাস্থ্য এবং সৌন্দর্য বজায়
								রাখা, যাতে তাদের জীবনের মান উন্নত হয় এবং তারা পান উজ্জ্বল, স্বাস্থ্যকর হাসি।
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
