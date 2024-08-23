import React from "react";
interface Props extends React.ComponentProps<"div"> {
	dictionary: any;
}

export const OurCommitment = ({ dictionary, ...props }: Props) => {
	return (
		<section className="w-full border-t py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{dictionary.heading}</h2>
						<p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							{dictionary.desc}{" "}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
