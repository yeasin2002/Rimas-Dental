import { buttonVariants, LinkTo, ServiceCards } from "@/components";

const ServicesManagement = () => {
	return (
		<section className="p-4">
			<div className="mb-8 mt-2 flex items-center justify-between">
				<div>
					<h1 className="font-grotesk text-4xl font-bold text-main-400 sm:text-5xl md:text-6xl lg:text-7xl">
						Services
					</h1>
					<p>Services that you provide</p>
				</div>
				<LinkTo
					className={buttonVariants({ variant: "dracula" })}
					href={"/admin/services/write"}
				>
					Add Doctors
				</LinkTo>
			</div>
			<div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
				<ServiceCards />
				<ServiceCards />
				<ServiceCards />
			</div>
		</section>
	);
};

export default ServicesManagement;
