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
import { getAllAppointment } from "@/actions/Appointments.actions/ index";
import { getFormattedDate } from "@/utils/formateDates";
import { Trash2 } from "lucide-react";
import AppointmentActions from "./ApoointmentActionst";

interface Props extends React.ComponentProps<"div"> {}

export const AppointmentManage = async ({ ...props }: Props) => {
	const data = await getAllAppointment();

	return (
		<div {...props}>
			<div>
				<h2 className="font-grotesk text-4xl font-bold text-main-400 lg:text-3xl xl:text-4xl">Appointments</h2>
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
						{data?.map((item) => (
							<tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800" key={item._id}>
								<th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
									{item.name}
								</th>
								<td className="px-6 py-4">{item.phone}</td>
								<td className="px-6 py-4">{getFormattedDate(item.date)}</td>
								<td className="px-6 py-4">{item.time.from + " - " + item.time.to}</td>
								<td className="px-6 py-4">
									<AppointmentActions id={item._id} />
								</td>
							</tr>
						))}
					</tbody>
				</table>
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
