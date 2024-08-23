import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const CookiesCards = ({ ...props }: Props) => {
	return (
		<section
			className="fixed bottom-16 left-12 mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
			{...props}
		>
			<h2 className="font-semibold text-gray-800 dark:text-white">🍪 Cookie Notice</h2>
			<p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
				We use cookies to ensure that we give you the best experience on our website.{" "}
				<a href="#" className="text-blue-500 hover:underline">
					Read cookies policies
				</a>
				.{" "}
			</p>
			<div className="mt-4 flex shrink-0 items-center justify-between gap-x-4">
				<button className="text-xs text-gray-800 underline transition-colors duration-300 hover:text-gray-600 focus:outline-none dark:text-white dark:hover:text-gray-400">
					Manage your preferences
				</button>
				<button className="rounded-lg bg-gray-900 px-4 py-2.5 text-xs font-medium text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none">
					Accept
				</button>
			</div>
		</section>
	);
};
