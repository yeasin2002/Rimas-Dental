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

export const AppointmentManage = ({ ...props }: Props) => {
	return (
		<div {...props}>
			<div>
				<h2
					//  className="mb-2 mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl"
					className="font-grotesk text-4xl font-bold text-main-400 lg:text-3xl xl:text-4xl"
				>
					Appointments
				</h2>
			</div>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
					<thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								patient name
							</th>
							<th scope="col" className="px-6 py-3">
								Contact Number
							</th>
							<th scope="col" className="px-6 py-3">
								Date
							</th>
							<th scope="col" className="px-6 py-3">
								Time
							</th>
							<th scope="col" className="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
							<th
								scope="row"
								className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
							>
								Yeasin
							</th>
							<td className="px-6 py-4">163227965</td>
							<td className="px-6 py-4">Tody</td>
							<td className="px-6 py-4">9:00 PM</td>
							<td className="px-6 py-4">
								<a
									href="#"
									className="font-medium text-blue-600 hover:underline dark:text-blue-500"
								>
									Edit
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

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
	);
};
