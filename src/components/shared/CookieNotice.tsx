"use server";

import { cookies } from "next/headers";

interface Props extends React.ComponentProps<"form"> {}
const cookiesSessionName = "isAccept-cookies";

export const CookieNotice = async ({ ...props }: Props) => {
	const isAcceptedCookies = cookies().get(cookiesSessionName)?.value === "true";

	const handleAccept = async () => {
		"use server";

		cookies().set(cookiesSessionName, "true", {
			maxAge: 60 * 60 * 24 * 365,
			sameSite: "lax",
			path: "/",
		});
	};

	if (isAcceptedCookies) return null;

	return (
		<>
			<form
				className={`animate-fade-up fixed bottom-8 left-12 z-50 mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800`}
				action={handleAccept}
				{...props}
			>
				<h2 className="font-semibold text-gray-800 dark:text-white">🍪 Cookie Notice</h2>
				<p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
					We use cookies to ensure that we give you the best experience on our website.{" "}
					<a href="#" className="text-blue-500 hover:underline">
						Read cookies policies .
					</a>
				</p>
				<div className="mt-4 flex shrink-0 items-center justify-between gap-x-4">
					{/* <button  className="text-xs text-gray-800 underline transition-colors duration-300 hover:text-gray-600 focus:outline-none dark:text-white dark:hover:text-gray-400" type="button">Manage your preferences</button> */}
					<div></div>
					<button
						className="rounded-lg bg-gray-900 px-4 py-2.5 text-xs font-medium text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none"
						type="submit"
					>
						Accept
					</button>
				</div>
			</form>
		</>
	);
};
