"use client";

import { Button, DatePicker, Input, TimePicker } from "@/components";
import { cn } from "@/utils";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface Props extends React.ComponentProps<"form"> {}
interface FormValues {
	name: string;
	phone: string;
	appointmentDate: Date;
	appointmentTime: {
		from: string;
		to: string;
	};
}

export const AppointmentForm = (props: Props) => {
	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
	} = useForm<FormValues>({
		defaultValues: {
			appointmentTime: {
				from: "5:00 PM",
				to: "6:00 PM",
			},
		},
	});

	const onSubmit = (data: FormValues) => {
		console.log(data);
	};

	return (
		<form
			{...props}
			className={cn("h-full rounded-xl bg-white p-6", props.className)}
			onSubmit={handleSubmit(onSubmit)}
		>
			<p className="font-grotesk text-2xl  font-bold text-main-500">
				Book Appointment
			</p>
			<div className="mt-4 grid w-full  grid-cols-1 gap-4 md:grid-cols-2">
				<Input
					register={register("name", {
						required: "Name is required",
					})}
					errorMsg={errors.name?.message}
					labelName="Full Name"
					className="input-blue"
					placeholder="Enter your full name"
				/>
				<Input
					register={register("phone", {
						required: "Phone number  is required",
					})}
					errorMsg={errors.name?.message}
					labelName="Contact Number"
					className="input-blue"
					placeholder="Enter your contact number"
				/>
				<Controller
					control={control}
					name="appointmentDate"
					render={(files) => (
						<DatePicker
							date={files.field.value}
							setDate={files.field.onChange}
						/>
					)}
				/>

				<Controller
					control={control}
					name="appointmentTime"
					render={(files) => (
						<TimePicker
							value={files.field.value}
							onValueChange={(value) => {
								files.field.onChange(value);
							}}
						/>
					)}
				/>
			</div>
			<Button
				variant={"dracula"}
				type="submit"
				className="mt-4 w-full rounded-lg"
			>
				Submit
			</Button>
		</form>
	);
};
