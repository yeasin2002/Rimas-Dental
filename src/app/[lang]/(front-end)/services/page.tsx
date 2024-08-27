import { ServiceCard2 } from "@/components";
import doctorWork_img from "@/assets/images/x-ray.jpg";
import { getDictionary } from "@/Internationalization";
import { getAllService } from "@/actions/service/service.actions";

interface Props {
	params: { lang: string };
}

const Services = async ({ params }: Props) => {
	const dictionary = await getDictionary(params.lang, "services");
	const data = await getAllService();

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
					<h1 className="font-grotesk text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">{dictionary?.heading}</h1>
					<p className="text-2xl">{dictionary?.subheading}</p>
				</div>
			</section>
			<article className="">
				<h1 className="mb-8 mt-10 font-grotesk text-xl font-bold capitalize text-main-400 md:text-3xl lg:text-4xl">
					{dictionary?.listOfContent}
				</h1>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
					{data?.data?.map((service) => <ServiceCard2 key={service._id} data={service} />)}
				</div>
			</article>
		</div>
	);
};

export default Services;

export async function generateStaticParams() {
	return [{ lang: "bn" }, { lang: "en" }];
}
