import { ServiceCard2 } from "@/components";
import doctorWork_img from "@/assets/images/x-ray.jpg";

const Services = () => {
	const arr = [1, 2, 3, 4];
	return (
		<div className="container py-4">
			<section className="relative h-[30dvh] w-full rounded-md">
				<video
					src="https://videos.pexels.com/video-files/5356195/5356195-uhd_2560_1440_25fps.mp4"
					autoPlay
					loop
					muted
					className="h-full w-full rounded-md object-cover"
				/>
				<div className="absolute inset-0 flex flex-col items-center justify-center rounded-md bg-black/70 text-white">
					<h1 className="font-grotesk text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
						Service that we provide
					</h1>
					<p className="text-2xl">We provide various type of dental services</p>
				</div>
			</section>
			<article className="">
				<h1 className="mb-8 mt-10 text-center font-grotesk text-xl font-bold capitalize text-main-400 md:text-3xl lg:text-4xl">
					List of our Services
				</h1>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{arr.map((item) => (
						<ServiceCard2 key={item} />
					))}
				</div>
			</article>
		</div>
	);
};

export default Services;

export async function generateStaticParams() {
	return [{ lang: "bn" }, { lang: "en" }];
}
