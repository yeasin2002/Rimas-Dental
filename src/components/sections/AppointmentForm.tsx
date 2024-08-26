"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Button, DatePicker, Input, TimePicker, UploadingLoop } from "@/components";
import { AppointmentScheduleData, AppointmentScheduleSchema } from "@/schema";
import { cn } from "@/utils";
import { createNewAppointment } from "@/actions/Appointments.actions/ index";
import toast from "react-hot-toast";
import { revalidatePath_server } from "@/actions";
import { useParams } from "next/navigation";

interface Props extends React.ComponentProps<"form"> {
	dictionary: any;
}

export const AppointmentForm = ({ dictionary, ...props }: Props) => {
	const [isLoading, setIsLoading] = useState(false);
	const params = useParams();

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		reset,
	} = useForm<AppointmentScheduleData>({
		resolver: zodResolver(AppointmentScheduleSchema),
		defaultValues: { time: { from: "5:00 PM", to: "6:00 PM" }, date: new Date() },
	});

	const onSubmit = async (data: AppointmentScheduleData) => {
		setIsLoading(true);
		try {
			console.log(data);
			const req = await createNewAppointment(data);
			if (!req) throw new Error("something went wrong");
			reset();
			toast.success("Appointment created successfully");
			return await revalidatePath_server(`/${params.lang}/admin/appointment`);
		} catch (error) {
			console.log("🚀 ~ onSubmit ~ error:", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form
			{...props}
			className={cn("h-full rounded-xl bg-white p-6", props.className)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<p className="font-grotesk text-2xl font-bold text-main-500 2xl:text-3xl">{dictionary?.heading}</p>
			<div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
				<Input
					register={register("name", {
						required: "Name is required",
					})}
					errorMsg={errors.name?.message}
					labelName={dictionary.inputs.fullName}
					className="input-blue"
					placeholder={dictionary.placeholder.fullName}
				/>
				<Input
					register={register("phone", {
						required: "Phone number  is required",
					})}
					errorMsg={errors.phone?.message}
					labelName={dictionary.inputs.phone}
					className="input-blue"
					placeholder={dictionary.placeholder.phone}
				/>
				<Controller
					control={control}
					name="date"
					render={(files) => (
						<div>
							<DatePicker
								date={files.field.value}
								setDate={files.field.onChange}
								className="w-full 2xl:px-4 2xl:py-6 2xl:text-lg"
								defaultPlaceholder={dictionary.inputs.date}
							/>
							{errors?.date && <p className="text-red-500"> Date is required! </p>}
						</div>
					)}
				/>

				<Controller
					control={control}
					name="time"
					render={(files) => (
						<TimePicker timeValue={files.field.value} onValueChange={(value) => files.field.onChange(value)} />
					)}
				/>
			</div>
			<Button variant={"dracula"} type="submit" className="mt-4 w-full rounded-lg 2xl:py-8 2xl:text-xl">
				{isLoading ? <UploadingLoop /> : dictionary?.cta}
			</Button>
		</form>
	);
};
