import React from "react";
interface Props extends React.ComponentProps<"div"> {
	dictionary: any;
}

export const ExplainAboutService = ({ dictionary, ...props }: Props) => {
	return (
		<section className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl 2xl:text-6xl">{dictionary.heading}</h2>
						<p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed 2xl:text-2xl">
							{dictionary.desc}
						</p>
					</div>
					<div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
						{dictionary?.facilities?.map((val: any) => {
							return (
								<div className="grid items-center gap-1" key={val?.title}>
									<h3 className="text-lg font-bold 2xl:text-2xl">{val?.title}</h3>
									<p className="text-sm text-gray-500 dark:text-gray-400 2xl:text-lg">{val?.value}</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
