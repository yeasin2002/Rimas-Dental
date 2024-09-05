import { SVGProps } from "react";

export const User = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		className="mx-3 h-6 w-6 text-gray-300 dark:text-gray-500"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth="{2}"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
		/>
	</svg>
);

export const UpArrow = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		className="h-6 w-6 text-gray-300 dark:text-gray-500"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={2}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
		/>
	</svg>
);

export const Email = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		className="mx-3 h-6 w-6 text-gray-300 dark:text-gray-500"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={2}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
		/>
	</svg>
);

export const Lock = (props: SVGProps<SVGSVGElement>) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		className="mx-3 h-6 w-6 text-gray-300 dark:text-gray-500"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={2}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
		/>
	</svg>
);

export const Home = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="home" {...props}>
		<path d="M23,30H9a3,3,0,0,1-3-3V17H5a1,1,0,0,1-.63-1.77l11-9a1,1,0,0,1,1.27,0l11,9A1,1,0,0,1,27,17H26V27A3,3,0,0,1,23,30ZM7.58,15.18A1,1,0,0,1,8,16V27a1,1,0,0,0,1,1H23a1,1,0,0,0,1-1V16a1,1,0,0,1,.42-.82L16,8.29Z" />
	</svg>
);

export function ContactsOutline(props: SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				d="M4 23v-2h16v2zM4 3V1h16v2zm8 10q1.25 0 2.125-.875T15 10t-.875-2.125T12 7t-2.125.875T9 10t.875 2.125T12 13m-8 7q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm1.75-2q1.125-1.4 2.725-2.2T12 15t3.525.8T18.25 18H20V6H4v12zm2.95 0h6.6q-.725-.5-1.562-.75T12 17t-1.737.25T8.7 18m3.3-7q-.425 0-.712-.288T11 10t.288-.712T12 9t.713.288T13 10t-.288.713T12 11m0 1"
			></path>
		</svg>
	);
}

export function FileDigit({ ...props }: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={24}
			height={24}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			className="mx-3 h-6 w-6 text-gray-300 dark:text-gray-500"
			{...props}
		>
			<path d="M4 22h14a2 2 0 002-2V7l-5-5H6a2 2 0 00-2 2v4" />
			<path d="M14 2v4a2 2 0 002 2h4" />
			<rect width={4} height={6} x={2} y={12} rx={2} />
			<path d="M10 12h2v6M10 18h4" />
		</svg>
	);
}
