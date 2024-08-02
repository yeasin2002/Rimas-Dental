import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const OurCommitment = ({ ...props }: Props) => {
	return (
		<section className="w-full border-t py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">
							আপনার সুবিধার জন্য প্রতিশ্রুতিবদ্ধ
						</h2>
						<p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							রিমার ডেন্টালে, আমরা বুঝি যে ডেন্টিস্টের কাছে যাওয়া কিছু লোকের জন্য উদ্বেগের
							কারণ হতে পারে। এই কারণেই আমরা আমাদের সমস্ত রোগীদের জন্য একটি উষ্ণ, স্বাগত,
							এবং আরামদায়ক পরিবেশ তৈরি করাকে আমাদের লক্ষ্য বানিয়েছি
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
