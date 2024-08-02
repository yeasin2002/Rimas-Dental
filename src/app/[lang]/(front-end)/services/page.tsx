import { ServiceCard2 } from "@/components";

const Services = () => {
	const arr = [1, 2, 3, 4];
	return (
		<div className="container">
			<h1 className="mb-8 mt-10 font-grotesk text-4xl font-bold text-main-400 sm:text-5xl md:text-6xl lg:text-7xl">
				Services
			</h1>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{arr.map((item) => (
					<ServiceCard2 key={item} />
				))}
			</div>
		</div>
	);
};

export default Services;

export async function generateStaticParams() {
	return [{ lang: "bn" }, { lang: "en" }];
}
