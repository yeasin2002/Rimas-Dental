import { AppointmentForm, Nav } from "@/components";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import doctorSupport from "@/assets/images/cembar-view.webp";

import React from "react";
import Image from "next/image";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
	dictionary: any;
	dicForForm: any;
}

export const AboutHero = async ({
	dictionary,
	dicForForm,
	...props
}: Props) => {
	return (
		<section className="w-full py-6 xl:py-32">
			<div className="container px-4 md:px-6">
				<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div className="flex flex-col justify-center space-y-4">
						<div className="space-y-2">
							<h1 className="my-5 text-5xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none 2xl:text-7xl">
								{dictionary.name}
							</h1>
							<p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl 2xl:text-xl">
								{dictionary.desc1}
								<br />
								{dictionary.desc2}
							</p>
						</div>
						<div className="flex flex-col gap-2 min-[400px]:flex-row">
							<Dialog>
								<DialogTrigger className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 2xl:py-6 2xl:text-xl">
									{dictionary?.bookAppointment}
								</DialogTrigger>

								<DialogContent>
									<AppointmentForm dictionary={dicForForm} />
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
