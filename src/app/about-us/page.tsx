import Image from "next/image";

import { AppointmentForm, Nav } from "@/components";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AboutState } from "./AboutState";

import doctorSupport from "@/assets/images/cembar-view.jpg";
import doctorImg from "@/assets/temp/doctor-3.jpg";

const AboutUs = () => {
	return (
		<div className="flex flex-col">
			<Nav />

			<main className="flex-1">
				<section className="w-full py-6 xl:py-32">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="my-5 text-5xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										{`রিমা'স`} ডেন্টাল
									</h1>
									<p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
										ডেন্টার ক্লিনিক ৫ বছর ধরে উন্নত প্রযুক্তি ও অভিজ্ঞ
										ডেন্টিস্টদের মাধ্যমে সর্বোচ্চ মানের ব্যথামুক্ত ডেন্টাল
										কেয়ার প্রদান করে আসছে। আমাদের লক্ষ্য সুস্থ ও উজ্জ্বল হাসি
										নিশ্চিত করা।
										<br />
										যোগাযোগের জন্য 01731-519025 বা 01533-881102 নম্বরের কল করুণ
										।
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Dialog>
										<DialogTrigger className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
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

				<AboutState />

				<section className="w-full py-12 md:py-24 lg:py-32">
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
									<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
										ডা. শারমিন আকতার রিমা
									</h2>
									<p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
										রিমাস ডেন্টার ক্লিনিক ৫ বছর ধরে উচ্চ মানের ডেন্টাল কেয়ার
										প্রদান করে আসছে। উন্নত প্রযুক্তি এবং অভিজ্ঞ ডেন্টিস্টদের
										মাধ্যমে প্রতিটি রোগীর জন্য ব্যক্তিগতকৃত সেবা নিশ্চিত করা
										হয়। নিয়মিত ডেন্টাল চেকআপ থেকে রুট ক্যানাল থেরাপি এবং
										ডেন্টাল ইমপ্ল্যান্ট পর্যন্ত সব ধরনের সেবা প্রদান করা হয়।
										ব্যথামুক্ত এবং স্বাচ্ছন্দ্যময় চিকিৎসা প্রক্রিয়া নিশ্চিত
										করতে আধুনিক সরঞ্জাম ব্যবহার করা হয়। ডেন্টার ক্লিনিকের
										লক্ষ্য হল প্রতিটি রোগীর দাতের স্বাস্থ্য এবং সৌন্দর্য বজায়
										রাখা, যাতে তাদের জীবনের মান উন্নত হয় এবং তারা পান উজ্জ্বল,
										স্বাস্থ্যকর হাসি।
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									আমাদের সুবিধাসমূহ
								</h2>
								<p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									রিমার ডেন্টাল ক্লিনিক প্রতিশ্রুতিবদ্ধ রোগীদের সর্বোচ্চ মানের
									যত্ন প্রদান করতে। আমাদের আধুনিক সুবিধাসম্পন্ন ক্লিনিক
									সর্বাধুনিক ডেন্টাল প্রযুক্তি এবং উন্নত সরঞ্জাম দ্বারা সজ্জিত,
									যা নিশ্চিত করে রোগীরা সবচেয়ে কার্যকরী এবং আরামদায়ক চিকিৎসা
									পান।
								</p>
							</div>
							<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
								<div className="grid gap-1">
									<h3 className="text-lg font-bold">
										দীর্ঘমেয়াদী সংশ্লিষ্ট চিকিৎসা
									</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										রিমার ডেন্টাল ক্লিনিকে আমরা দীর্ঘমেয়াদী সংশ্লিষ্ট চিকিৎসা
										প্রদানে প্রতিশ্রুতিবদ্ধ। আমাদের কেন্দ্রিয় উদ্দেশ্য হল
										রোগীদের ডেন্টাল স্বাস্থ্য সম্পর্কিত সমস্যা সমাধান করা, যাতে
										তারা প্রতিটি চিকিৎসার পরিপূর্ণ সুযোগ উপভোগ করতে পারেন।
									</p>
								</div>
								<div className="grid gap-1">
									<h3 className="text-lg font-bold">
										সম্পূর্ণ জীবাণুমুক্ত পরিবেশ
									</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										আমাদের ক্লিনিক সর্বদা সম্পূর্ণ জীবাণুমুক্ত রাখা হয়, যা
										রোগীদের জন্য নিরাপদ এবং স্বাস্থ্যকর পরিবেশ নিশ্চিত করে।
										প্রতিটি যন্ত্র এবং সরঞ্জাম নিয়মিতভাবে জীবাণুমুক্ত করা হয়,
										যা সর্বোচ্চ মানের স্বাস্থ্য সুরক্ষা প্রদান করে।
									</p>
								</div>
								<div className="grid gap-1">
									<h3 className="text-lg font-bold">
										বন্ধুত্বপূর্ণ ও পেশাদার টিম
									</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400">
										রিমার ডেন্টালের বন্ধুত্বপূর্ণ এবং পেশাদার টিম প্রতিটি রোগীর
										প্রয়োজনীয়তা বুঝে সেবা প্রদান করে। তাদের যত্নশীল এবং
										সমব্যথী মনোভাব আপনার ডেন্টাল অভিজ্ঞতাকে করে তুলবে আরও
										স্বাচ্ছন্দ্যময় এবং সন্তোষজনক।
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full border-t py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									আপনার সুবিধার জন্য প্রতিশ্রুতিবদ্ধ
								</h2>
								<p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									রিমার ডেন্টালে, আমরা বুঝি যে ডেন্টিস্টের কাছে যাওয়া কিছু
									লোকের জন্য উদ্বেগের কারণ হতে পারে। এই কারণেই আমরা আমাদের সমস্ত
									রোগীদের জন্য একটি উষ্ণ, স্বাগত, এবং আরামদায়ক পরিবেশ তৈরি
									করাকে আমাদের লক্ষ্য বানিয়েছি
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
				<p className="text-xs text-gray-500 dark:text-gray-400">
					© 2024 {`Rima's`} Dental. All rights reserved.
				</p>
				<nav className="flex gap-4 sm:ml-auto sm:gap-6">
					<a
						className="text-xs underline-offset-4 hover:underline"
						href="#"
						rel="ugc"
					>
						Privacy Policy
					</a>
					<a
						className="text-xs underline-offset-4 hover:underline"
						href="#"
						rel="ugc"
					>
						Terms of Service
					</a>
				</nav>
			</footer>
		</div>
	);
};

export default AboutUs;
