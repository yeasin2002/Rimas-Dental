// export const generateStaticParams  = () => {  }

import Image from "next/image";

interface SingleServicesProps {
	params: {
		id: string;
	};
}

const SingleServices = ({ params }: SingleServicesProps) => {
	return (
		<div>
			<div className="min-h-screen bg-gray-100">
				<main className="container mx-auto px-4 py-8">
					<article className="overflow-hidden rounded-lg bg-white shadow-md">
						<Image
							src="https://images.unsplash.com/photo-1723441857662-d465a52e78d0"
							alt="Service Cover"
							className="h-[60vh] w-full object-cover"
							width={1200}
							height={800}
						/>
						<div className="p-6">
							<h2 className="mb-2 text-2xl font-bold text-gray-800">
								Dental Cleaning
							</h2>
							<p className="mb-4 text-gray-600">
								Professional teeth cleaning service to maintain oral hygiene and
								prevent dental issues.
							</p>
							<div className="mb-4 flex items-center">
								<svg
									className="mr-2 h-6 w-6 text-gray-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
								<span className="text-gray-600">Price Range: $50 - $100</span>
							</div>
							<div className="mb-4 flex flex-wrap gap-2">
								<span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
									Dental
								</span>
								<span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
									Cleaning
								</span>
								<span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800">
									Oral Health
								</span>
							</div>

							<div className="mb-6 mt-10">
								<h3 className="mb-2 text-xl font-semibold text-gray-800">
									About This Service
								</h3>
								<p className="text-gray-600">
									Our dental cleaning service includes a thorough examination of
									your teeth and gums, removal of plaque and tartar, and
									professional polishing. This service is essential for
									maintaining good oral health and preventing various dental
									problems.
								</p>
							</div>
							<div className="mb-6 mt-10">
								<h3 className="mb-2 text-xl font-semibold text-gray-800">
									Video Demonstration
								</h3>
								<div className="aspect-video">
									<iframe
										src="https://www.youtube.com/embed/dQw4w9WgXcQ"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
										className="h-full w-full"
									></iframe>
								</div>
							</div>
							<div className="mt-10">
								<h3 className="mb-2 text-xl font-semibold text-gray-800">
									Doctor Information
								</h3>
								<div className="flex items-center">
									<Image
										src="https://images.unsplash.com/photo-1723441857662-d465a52e78d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
										alt="Doctor"
										className="mr-4 h-12 w-12 rounded-full"
										width={100}
										height={100}
									/>
									<div>
										<p className="font-semibold text-gray-800">
											Dr. Jane Smith
										</p>
										<p className="text-gray-600">Dental Specialist</p>
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
