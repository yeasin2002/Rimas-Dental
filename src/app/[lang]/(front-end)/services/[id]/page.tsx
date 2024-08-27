import { getServiceById } from "@/actions/service/service.actions";
import { CircleDollarSign } from "lucide-react";
import Image from "next/image";
import { ShowPlayer } from "./ShowPlayer";
import { getDictionary } from "@/Internationalization";

interface SingleServicesProps {
	params: {
		id: string;
		lang: string;
	};
}

const SingleServices = async ({ params }: SingleServicesProps) => {
	const data = await getServiceById(params.id);
	const dictionary = await getDictionary(params.lang, "details_services");

	return (
		<div>
			<div className="min-h-screen bg-gray-100">
				<main className="container mx-auto px-4 py-8">
					<article className="overflow-hidden rounded-lg bg-white shadow-md">
						<Image
							src={data.data?.coverImage!}
							alt="Service Cover"
							className="h-[60vh] w-full object-cover"
							width={1200}
							height={800}
						/>
						<div className="p-6">
							<h2 className="mb-2 text-2xl font-bold text-gray-800">{data.data?.name}</h2>
							<p className="mb-4 text-gray-600">{data.data?.description}</p>
							<div className="mb-4 flex items-center gap-x-2">
								<CircleDollarSign />
								<p className="text-gray-600">
									{" "}
									{dictionary.Price_Range} : {data.data?.price_range}
								</p>
							</div>
							<div className="mb-4 flex flex-wrap gap-2">
								{data?.data?.tags?.map((tag) => (
									<span key={tag} className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
										{tag}
									</span>
								))}
							</div>

							<div className="mb-6 mt-10">
								<h3 className="mb-2 text-xl font-semibold text-gray-800">{dictionary.about_this}</h3>
								<div
									className="prose prose-slate w-full text-gray-600"
									dangerouslySetInnerHTML={{ __html: data.data?.content! }}
								/>
							</div>
							{data.data?.YT_VideoUrl && (
								<div className="my-6">
									<h3 className="mb-2 text-xl font-semibold text-gray-800">{dictionary.demonstration}</h3>
									<ShowPlayer url={data.data?.YT_VideoUrl} className="aspect-video w-full" />
								</div>
							)}

							<div className="mt-10">
								<h3 className="mb-2 text-xl font-semibold text-gray-800">{dictionary.DoctorInformation}</h3>
								<div className="flex items-center">
									<Image
										src={data.data?.doctorsId.profileImage!}
										alt="Doctor"
										className="mr-4 h-12 w-12 rounded-full"
										width={100}
										height={100}
									/>
									<div>
										<p className="font-semibold text-gray-800">{data.data?.doctorsId.name}</p>
										<p className="text-gray-600">{data.data?.doctorsId.specialization}</p>
									</div>
								</div>
							</div>
						</div>
					</article>
				</main>
			</div>
		</div>
	);
};

export default SingleServices;

// export const generateStaticParams  = () => {  }
