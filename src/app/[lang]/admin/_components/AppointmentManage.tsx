import React from "react";

interface Props extends React.ComponentProps<"div"> {}

export const AppointmentManage = ({ ...props }: Props) => {
	return (
		<div {...props}>
			<div>
				<h2 className="mb-2 mt-10 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
					Manage Appointments
				</h2>
			</div>

			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
					<thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Product name
							</th>
							<th scope="col" className="px-6 py-3">
								Color
							</th>
							<th scope="col" className="px-6 py-3">
								Category
							</th>
							<th scope="col" className="px-6 py-3">
								Price
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
								Apple MacBook Pro
							</th>
							<td className="px-6 py-4">Silver</td>
							<td className="px-6 py-4">Laptop</td>
							<td className="px-6 py-4">$2999</td>
							<td className="px-6 py-4">
								<a
									href="#"
									className="font-medium text-blue-600 hover:underline dark:text-blue-500"
								>
									Edit
								</a>
							</td>
						</tr>
						<tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
							<th
								scope="row"
								className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
							>
								Microsoft Surface Pro
							</th>
							<td className="px-6 py-4">White</td>
							<td className="px-6 py-4">Laptop PC</td>
							<td className="px-6 py-4">$1999</td>
							<td className="px-6 py-4">
								<a
									href="#"
									className="font-medium text-blue-600 hover:underline dark:text-blue-500"
								>
									Edit
								</a>
							</td>
						</tr>
						<tr className="bg-white dark:bg-gray-800">
							<th
								scope="row"
								className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
							>
								Magic Mouse 2
							</th>
							<td className="px-6 py-4">Black</td>
							<td className="px-6 py-4">Accessories</td>
							<td className="px-6 py-4">$99</td>
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
		</div>
	);
};
