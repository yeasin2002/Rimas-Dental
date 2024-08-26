"use client";

import { useMutation } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import React from "react";

import { UploadingLoop } from "../icons";
import { deleteAppointment, markAppointmentAsDone } from "@/actions/Appointments.actions/ index";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";
import { revalidatePath_server } from "@/actions";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
	id: string;
}

const AppointmentActions = ({ id }: Props) => {
	const params = useParams();

	const deleteAction = useMutation({
		mutationKey: ["deleteAppointment"],
		mutationFn: async () => deleteAppointment(id),
	});

	const markAction = useMutation({
		mutationKey: ["deleteAppointment"],
		mutationFn: async () => markAppointmentAsDone(id),
	});

	const deleteHandler = async () => {
		try {
			const req = await deleteAction.mutateAsync();
			if (!req) throw new Error("something went wrong");
			toast.success("Appointment deleted successfully");
			return await revalidatePath_server(`/${params.lang}/admin/appointment`);
		} catch (error) {
			console.log("🚀 ~ onClick={ ~ error:", error);
			toast.error(" Failed to delete Appointment ");
		}
	};

	const markHandler = async () => {
		try {
			const req = await markAction.mutateAsync();
			if (!req) throw new Error("something went wrong");

			console.log("🚀 ~ onClick={ ~ req:", req);
			toast.success("Appointment marked as done ");
			return await revalidatePath_server(`/${params.lang}/admin/appointment`);
		} catch (error) {
			toast.error(" Failed to mark Appointment ");
			console.log("🚀 ~ onClick={ ~ error:", error);
		}
	};

	return (
		<div className="flex items-center gap-x-2">
			<div>
				{deleteAction.isPending ? (
					<UploadingLoop />
				) : (
					<Trash2 className="mr-1 h-4 w-4 cursor-pointer" onClick={deleteHandler} />
				)}
			</div>
			<div className="flex cursor-pointer items-center gap-x-1">
				<input type="checkbox" name={"markAction" + id} id={"markAction" + id} onClick={markHandler} />
				{markAction.isPending ? (
					<UploadingLoop />
				) : (
					<label htmlFor={"markAction" + id} className="font-medium text-blue-600 hover:underline dark:text-blue-500">
						Mark as Done
					</label>
				)}
			</div>
		</div>
	);
};

export default AppointmentActions;
