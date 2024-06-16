import React from "react";
import Image from "next/image";

import demoImg from "@/assets/images/cembar-view.webp";

const About = () => {
	return (
		<>
			<div className="flex min-h-[100dvh] flex-col">
				<header className="flex h-14 items-center px-4 lg:px-6">
					<a className="flex items-center justify-center" href="#" rel="ugc">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-6 w-6"
						>
							<circle cx={12} cy={12} r={10} />
							<path d="M8 14s1.5 2 4 2 4-2 4-2" />
							<line x1={9} x2="9.01" y1={9} y2={9} />
							<line x1={15} x2="15.01" y1={9} y2={9} />
						</svg>
						<span className="sr-only">Acme Dental</span>
					</a>
					<nav className="ml-auto flex gap-4 sm:gap-6">
						<a
							className="text-sm font-medium underline-offset-4 hover:underline"
							href="#"
							rel="ugc"
						>
							Services
						</a>
						<a
							className="text-sm font-medium underline-offset-4 hover:underline"
							href="#"
							rel="ugc"
						>
							Patients
						</a>
						<a
							className="text-sm font-medium underline-offset-4 hover:underline"
							href="#"
							rel="ugc"
						>
							About
						</a>
						<a
							className="text-sm font-medium underline-offset-4 hover:underline"
							href="#"
							rel="ugc"
						>
							Contact
						</a>
					</nav>
				</header>
				<main className="flex-1">
					<section className="w-full py-12 md:py-24 lg:py-32">
						<div className="container px-4 md:px-6">
							<div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
								<div>
									<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
										Welcome to Acme Dental
									</h1>
									<p className="mt-4 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
										At Acme Dental, we are committed to providing exceptional
										dental care in a warm and welcoming environment. Our
										experienced team of professionals is dedicated to improving
										the oral health and overall well-being of our patients.
									</p>
								</div>
								<div className="flex flex-col gap-4">
									<div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
										<h2 className="text-2xl font-bold">Our Mission</h2>
										<p className="mt-2 text-gray-500 dark:text-gray-400">
											To deliver personalized, high-quality dental care that
											empowers our patients to achieve and maintain optimal oral
											health.
										</p>
									</div>
									<div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
										<h2 className="text-2xl font-bold">Our Core Values</h2>
										<ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
											<li>Compassion</li>
											<li>Integrity</li>
											<li>Excellence</li>
											<li>Innovation</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
						<div className="container px-4 md:px-6">
							<div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
								<div>
									<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
										Our History and Expertise
									</h2>
									<p className="mt-4 max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
										Acme Dental was founded in 1985 by Dr. John Smith, a highly
										respected dentist with over 25 years of experience in the
										field. Since then, we have grown to become a leading dental
										practice in the community, known for our commitment to
										excellence and patient-centric approach.
									</p>
								</div>
								<div className="grid gap-6">
									<div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
										<h3 className="text-2xl font-bold">Dr. John Smith</h3>
										<p className="mt-2 text-gray-500 dark:text-gray-400">
											Founder and Lead Dentist
										</p>
										<p className="mt-4 text-gray-500 dark:text-gray-400">
											Dr. John Smith is a highly experienced dentist with over
											25 years of practice. He received his Doctor of Dental
											Surgery (DDS) degree from the University of California,
											Los Angeles, and has a strong focus on preventive
											dentistry and patient education.
										</p>
									</div>
									<div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
										<h3 className="text-2xl font-bold">Dr. Emily Johnson</h3>
										<p className="mt-2 text-gray-500 dark:text-gray-400">
											Cosmetic Dentist
										</p>
										<p className="mt-4 text-gray-500 dark:text-gray-400">
											Dr. Emily Johnson is a skilled cosmetic dentist with a
											passion for creating beautiful, natural-looking smiles.
											She received her DDS degree from the University of
											Southern California and has extensive experience in
											veneers, teeth whitening, and other aesthetic procedures.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="w-full py-12 md:py-24 lg:py-32">
						<div className="container px-4 md:px-6">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
								Meet Our Team
							</h2>
							<div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
								<div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
									<div className="flex items-center gap-4">
										<span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
											<Image src={demoImg} alt="Dr. Sarah Lee" />
											<span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
												SL
											</span>
										</span>
										<div>
											<h3 className="text-xl font-bold">Dr. Sarah Lee</h3>
											<p className="text-gray-500 dark:text-gray-400">
												General Dentist
											</p>
										</div>
									</div>
									<p className="mt-4 text-gray-500 dark:text-gray-400">
										Dr. Sarah Lee is a highly skilled general dentist with a
										focus on preventive care and patient education. She received
										her DDS degree from the University of California, San
										Francisco, and is committed to helping her patients achieve
										and maintain optimal oral health.
									</p>
								</div>
								<div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
									<div className="flex items-center gap-4">
										<span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
											<Image src={demoImg} alt="Dr. Michael Chen" />
											<span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
												MC
											</span>
										</span>
										<div>
											<h3 className="text-xl font-bold">Dr. Michael Chen</h3>
											<p className="text-gray-500 dark:text-gray-400">
												Endodontist
											</p>
										</div>
									</div>
									<p className="mt-4 text-gray-500 dark:text-gray-400">
										Dr. Michael Chen is a highly skilled endodontist with
										extensive experience in root canal therapy and other complex
										dental procedures. He received his DDS degree from the
										University of Southern California and is committed to
										providing exceptional care to his patients.
									</p>
								</div>
								<div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
									<div className="flex items-center gap-4">
										<span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
											<Image src={demoImg} alt="Jessica Nguyen" />
											<span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
												JN
											</span>
										</span>
										<div>
											<h3 className="text-xl font-bold">Jessica Nguyen</h3>
											<p className="text-gray-500 dark:text-gray-400">
												Dental Hygienist
											</p>
										</div>
									</div>
									<p className="mt-4 text-gray-500 dark:text-gray-400">
										Jessica Nguyen is our dedicated dental hygienist with a
										passion for patient education and preventive care. She
										received her degree from the University of California,
										Irvine, and is committed to helping our patients maintain
										healthy, beautiful smiles.
									</p>
								</div>
							</div>
						</div>
					</section>
					<section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
						<div className="container px-4 md:px-6">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
								Our Practice Philosophy
							</h2>
							<div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
								<div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={24}
										height={24}
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
										className="h-8 w-8 text-primary"
									>
										<circle cx={12} cy={12} r={10} />
										<path d="M8 14s1.5 2 4 2 4-2 4-2" />
										<line x1={9} x2="9.01" y1={9} y2={9} />
										<line x1={15} x2="15.01" y1={9} y2={9} />
									</svg>
									<h3 className="mt-4 text-xl font-bold">Preventive Care</h3>
									<p className="mt-2 text-gray-500 dark:text-gray-400">
										We believe in the importance of preventive dentistry to help
										our patients maintain healthy, beautiful smiles for life.
										Our team focuses on regular check-ups, cleanings, and
										patient education to catch and address any issues early on.
									</p>
								</div>
								<div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={24}
										height={24}
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
										className="h-8 w-8 text-primary"
									>
										<rect width={8} height={4} x={8} y={2} rx={1} ry={1} />
										<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
									</svg>
									<h3 className="mt-4 text-xl font-bold">
										Patient-Centric Approach
									</h3>
									<p className="mt-2 text-gray-500 dark:text-gray-400">
										At Acme Dental, we believe in a personalized,
										patient-centric approach to dental care. We take the time to
										understand each {`patient's`} unique needs, concerns, and
										goals, and work closely with them to develop a customized
										treatment plan.
									</p>
								</div>
								<div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={24}
										height={24}
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
										className="h-8 w-8 text-primary"
									>
										<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
										<path d="M9 18h6" />
										<path d="M10 22h4" />
									</svg>
									<h3 className="mt-4 text-xl font-bold">
										Continuous Improvement
									</h3>
									<p className="mt-2 text-gray-500 dark:text-gray-400">
										We are committed to staying at the forefront of dental
										technology and techniques. Our team regularly attends
										continuing education courses and workshops to ensure we are
										providing our patients with the most advanced and effective
										treatments available.
									</p>
								</div>
							</div>
						</div>
					</section>
				</main>
				<footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
					<p className="text-xs text-gray-500 dark:text-gray-400">
						© 2024 Acme Dental. All rights reserved.
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

export default About;
