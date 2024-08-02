import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const ExplainAboutService = ({ ...props }: Props) => {
	return (
		<section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl 2xl:text-6xl">
							আমাদের সুবিধাসমূহ
						</h2>
						<p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed 2xl:text-2xl">
							রিমার ডেন্টাল ক্লিনিক প্রতিশ্রুতিবদ্ধ রোগীদের সর্বোচ্চ মানের যত্ন প্রদান করতে।
							আমাদের আধুনিক সুবিধাসম্পন্ন ক্লিনিক সর্বাধুনিক ডেন্টাল প্রযুক্তি এবং উন্নত সরঞ্জাম
							দ্বারা সজ্জিত, যা নিশ্চিত করে রোগীরা সবচেয়ে কার্যকরী এবং আরামদায়ক চিকিৎসা পান।
						</p>
					</div>
					<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12 ">
						<div className="grid gap-1 items-center ">
							<h3 className="text-lg font-bold 2xl:text-2xl">
								দীর্ঘমেয়াদী সংশ্লিষ্ট চিকিৎসা
							</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400 2xl:text-lg">
								রিমার ডেন্টাল ক্লিনিকে আমরা দীর্ঘমেয়াদী সংশ্লিষ্ট চিকিৎসা প্রদানে
								প্রতিশ্রুতিবদ্ধ। আমাদের কেন্দ্রিয় উদ্দেশ্য হল রোগীদের ডেন্টাল স্বাস্থ্য সম্পর্কিত
								সমস্যা সমাধান করা, যাতে তারা প্রতিটি চিকিৎসার পরিপূর্ণ সুযোগ উপভোগ করতে পারেন।
							</p>
						</div>
						<div className="grid gap-1">
							<h3 className="text-lg font-bold 2xl:text-2xl">
								সম্পূর্ণ জীবাণুমুক্ত পরিবেশ
							</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400 2xl:text-lg">
								আমাদের ক্লিনিক সর্বদা সম্পূর্ণ জীবাণুমুক্ত রাখা হয়, যা রোগীদের জন্য নিরাপদ এবং
								স্বাস্থ্যকর পরিবেশ নিশ্চিত করে। প্রতিটি যন্ত্র এবং সরঞ্জাম নিয়মিতভাবে
								জীবাণুমুক্ত করা হয়, যা সর্বোচ্চ মানের স্বাস্থ্য সুরক্ষা প্রদান করে।
							</p>
						</div>
						<div className="grid gap-1">
							<h3 className="text-lg font-bold 2xl:text-2xl">
								বন্ধুত্বপূর্ণ ও পেশাদার টিম
							</h3>
							<p className="text-sm text-gray-500 dark:text-gray-400 2xl:text-lg">
								রিমার ডেন্টালের বন্ধুত্বপূর্ণ এবং পেশাদার টিম প্রতিটি রোগীর প্রয়োজনীয়তা বুঝে
								সেবা প্রদান করে। তাদের যত্নশীল এবং সমব্যথী মনোভাব আপনার ডেন্টাল অভিজ্ঞতাকে
								করে তুলবে আরও স্বাচ্ছন্দ্যময় এবং সন্তোষজনক।
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
