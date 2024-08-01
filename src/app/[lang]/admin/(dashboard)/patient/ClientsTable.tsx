import React from "react";

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

interface Props extends React.ComponentProps<"div"> {}

export const ClientsTable = ({ ...props }: Props) => {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<div className="flex-column flex flex-wrap items-center justify-between space-y-4 pb-4 sm:flex-row sm:space-y-0">
				<div>
					<button
						id="dropdownRadioButton"
						data-dropdown-toggle="dropdownRadio"
						className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
						type="button"
					>
						<svg
							className="me-3 h-3 w-3 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
						</svg>
						Last 30 days
						<svg
							className="ms-2.5 h-2.5 w-2.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 10 6"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="m1 1 4 4 4-4"
							/>
						</svg>
					</button>
					{/* Dropdown menu */}
					<div
						id="dropdownRadio"
						className="z-10 hidden w-48 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
						data-popper-reference-hidden=""
						data-popper-escaped=""
						data-popper-placement="top"
						style={{
							position: "absolute",
							inset: "auto auto 0px 0px",
							margin: 0,
							transform: "translate3d(522.5px, 3847.5px, 0px)",
						}}
					>
						<ul
							className="space-y-1 p-3 text-sm text-gray-700 dark:text-gray-200"
							aria-labelledby="dropdownRadioButton"
						>
							<li>
								<div className="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
									<input
										id="filter-radio-example-1"
										type="radio"
										defaultValue=""
										name="filter-radio"
										className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
									/>
									<label
										htmlFor="filter-radio-example-1"
										className="ms-2 w-full rounded text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Last day
									</label>
								</div>
							</li>
							<li>
								<div className="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
									<input
										id="filter-radio-example-2"
										type="radio"
										defaultValue=""
										name="filter-radio"
										className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
									/>
									<label
										htmlFor="filter-radio-example-2"
										className="ms-2 w-full rounded text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Last 7 days
									</label>
								</div>
							</li>
							<li>
								<div className="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
									<input
										id="filter-radio-example-3"
										type="radio"
										defaultValue=""
										name="filter-radio"
										className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
									/>
									<label
										htmlFor="filter-radio-example-3"
										className="ms-2 w-full rounded text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Last 30 days
									</label>
								</div>
							</li>
							<li>
								<div className="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
									<input
										id="filter-radio-example-4"
										type="radio"
										defaultValue=""
										name="filter-radio"
										className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
									/>
									<label
										htmlFor="filter-radio-example-4"
										className="ms-2 w-full rounded text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Last month
									</label>
								</div>
							</li>
							<li>
								<div className="flex items-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
									<input
										id="filter-radio-example-5"
										type="radio"
										defaultValue=""
										name="filter-radio"
										className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
									/>
									<label
										htmlFor="filter-radio-example-5"
										className="ms-2 w-full rounded text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										Last year
									</label>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<label htmlFor="table-search" className="sr-only">
					Search
				</label>
				<div className="relative">
					<div className="rtl:inset-r-0 pointer-events-none absolute inset-y-0 left-0 flex items-center ps-3 rtl:right-0">
						<svg
							className="h-5 w-5 text-gray-500 dark:text-gray-400"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
								clipRule="evenodd"
							/>
						</svg>
					</div>
					<input
						type="text"
						id="table-search"
						className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
						placeholder="Search for items"
					/>
				</div>
			</div>
			<table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
				<thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" className="px-6 py-3">
							name
						</th>
						<th scope="col" className="px-6 py-3">
							Number
						</th>
						<th scope="col" className="px-6 py-3">
							Address
						</th>
						<th scope="col" className="px-6 py-3">
							Gender
						</th>
						<th scope="col" className="px-6 py-3">
							Date
						</th>
						<th scope="col" className="px-6 py-3">
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					<tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
						<th
							scope="row"
							className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
						>
							Male
						</th>
						<td className="px-6 py-4">Silver</td>
						<td className="px-6 py-4">Laptop</td>
						<td className="px-6 py-4">$2999</td>
						<td className="px-6 py-4">1 Jan 2022</td>
						<td>
							<button
								type="button"
								className="font-medium text-blue-600 hover:underline dark:text-blue-500"
							>
								Details
							</button>
						</td>
					</tr>
				</tbody>
			</table>
			<div>
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious href="#" />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink href="#">1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext href="#" />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
};
