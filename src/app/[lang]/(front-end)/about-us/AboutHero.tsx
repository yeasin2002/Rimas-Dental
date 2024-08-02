import { AppointmentForm, Nav } from "@/components";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import doctorSupport from "@/assets/images/cembar-view.webp";

import React from "react";
import Image from "next/image";

export const AboutHero = () => {
	return (
		<section className="w-full py-6 xl:py-32">
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h1 className="my-5 text-5xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none  2xl:text-7xl">
								{`রিমা'স`} ডেন্টাল
							</h1>
							<p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl 2xl:text-xl">
								ডেন্টার ক্লিনিক ৫ বছর ধরে উন্নত প্রযুক্তি ও অভিজ্ঞ ডেন্টিস্টদের মাধ্যমে
								সর্বোচ্চ মানের ব্যথামুক্ত ডেন্টাল কেয়ার প্রদান করে আসছে। আমাদের লক্ষ্য সুস্থ ও
								উজ্জ্বল হাসি নিশ্চিত করা।
								<br />
								যোগাযোগের জন্য 01731-519025 বা 01533-881102 নম্বরের কল করুণ ।
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Dialog>
								<DialogTrigger className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 2xl:text-xl 2xl:py-6">
									অ্যাপয়েন্টমেন্ট বুক করুণ
								</DialogTrigger>

								<DialogContent>
									<AppointmentForm />
								</DialogContent>
							</Dialog>
						</div>
					</div>
					<Image
						src={doctorSupport}
						width={300}
						height={300}
						alt="Dental Logo"
						className="mx-auto aspect-square overflow-hidden rounded-2xl object-contain sm:w-full lg:order-last"
						priority
					/>
				</div>
			</div>
		</section>
	);
};
