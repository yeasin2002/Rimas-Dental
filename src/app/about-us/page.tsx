import Image from "next/image";

import { AppointmentForm, Nav } from "@/components";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import doctorSupport from "@/assets/images/docor-support.jpg";
import doctorImg from "@/assets/temp/doctor-3.jpg";

const AboutUs = () => {
	return (
		<>
			<div className="flex min-h-[100dvh] flex-col">
				<Nav />

				<main className="flex-1">
					<section className="w-full py-6 xl:py-32">
						<div className="container px-4 md:px-6">
							<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
								<div className="flex flex-col justify-center space-y-4">
									<div className="space-y-2">
										<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
											{`Rima's`} Dental
										</h1>
										<p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
											Providing comprehensive dental care with the latest
											technology and a commitment to patient comfort.
										</p>
									</div>
									<div className="flex flex-col gap-2 min-[400px]:flex-row">
										<Dialog>
											<DialogTrigger className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
												Book Appointment
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
									className="mx-auto aspect-square overflow-hidden rounded-xl object-contain sm:w-full lg:order-last"
								/>
							</div>
						</div>
					</section>
					<section className="w-full py-12 md:py-24 lg:py-32">
						<div className="container px-4 md:px-6">
							<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
								<Image
									src={doctorImg}
									width={550}
									height={550}
									alt="Dr. John Doe"
									className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
								/>
								<div className="flex flex-col justify-center space-y-4">
									<div className="space-y-2">
										<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
											Meet Dr. Sharmin Akter Rima
										</h2>
										<p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
											Dr. John Doe is a highly experienced and skilled dentist
											with over 15 years of practice. He is passionate about
											providing exceptional dental care and ensuring the comfort
											and well-being of his patients.
										</p>
										<p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
											Dr. Doe is a graduate of the prestigious University of
											Dentistry and has completed advanced training in cosmetic,
											restorative, and implant dentistry. He is committed to
											staying up-to-date with the latest advancements in dental
											technology and techniques to provide his patients with the
											best possible care.
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
										State-of-the-Art Facilities
									</h2>
									<p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
										At {`Rima's`} Dental, we are committed to providing our
										patients with the highest quality of care. Our
										state-of-the-art facilities are equipped with the latest
										dental technology and advanced equipment, ensuring that our
										patients receive the most efficient and comfortable
										treatment.
									</p>
								</div>
								<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
									<div className="grid gap-1">
										<h3 className="text-lg font-bold">Digital X-Rays</h3>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Our digital x-ray technology provides clear, detailed
											images with minimal radiation exposure.
										</p>
									</div>
									<div className="grid gap-1">
										<h3 className="text-lg font-bold">Intraoral Cameras</h3>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Our intraoral cameras allow us to capture high-resolution
											images of your teeth, making it easier to diagnose and
											treat any issues.
										</p>
									</div>
									<div className="grid gap-1">
										<h3 className="text-lg font-bold">Comfortable Chairs</h3>
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Our ergonomic dental chairs are designed for maximum
											comfort, ensuring a pleasant experience during your
											visits.
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
										Committed to Your Comfort
									</h2>
									<p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
										At {`Rima's`} Dental, we understand that visiting the
										dentist can be a source of anxiety for some people.{" "}
										{`That's`} why
										{`we've`} made it our mission to create a warm, welcoming,
										and comfortable environment for all our patients.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<a
										className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
										href="#"
										rel="ugc"
									>
										Contact Us
									</a>
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
		</>
	);
};

export default AboutUs;
