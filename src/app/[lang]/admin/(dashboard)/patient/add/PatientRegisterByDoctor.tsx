"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

import { registerPatientByDoctor_server } from "@/actions/auth.actions";
import { DatePicker, Email, InputCombo, InputComboForPassword, InputComboSelect, LinkTo, Lock } from "@/components";
import { loginFormSchema } from "@/schema";
import { patientSchemaForDoctorToAddData } from "@/types";
import { genderOption, regularBrushingTimeOption, sweetEatingLevelOption } from "./PatientRegisterByDoctor.options";

interface Props {
	dictionary: any;
}

export const PatientRegisterByDoctor = ({ dictionary }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		setError,
	} = useForm<patientSchemaForDoctorToAddData>({
		resolver: zodResolver(loginFormSchema),
	});

	const onSubmit = async (data: patientSchemaForDoctorToAddData) => {
		try {
			const res = await registerPatientByDoctor_server(data);
			console.log("🚀 ~ onSubmit ~ res:", res);

			if (!res.success) throw new Error(res.message);
			toast.success(res?.message);
		} catch (error: any) {
			// toast.error(error?.message || "Invalid email or password", {id: toastId,});
			return Swal.fire({
				icon: "error",
				title: "authentication failed.",
				text: error?.message || "Something went wrong!",
			});
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="p-10">
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<InputCombo
					register={register("name")}
					error={errors.name?.message}
					icon={<Email />}
					placeholder={"Enter your name"}
					labelName="Full Name"
				/>

				<InputComboSelect
					register={register("gender")}
					error={errors.name?.message}
					name={"Enter your name"}
					labelName="Full Name"
					item={genderOption?.map((item) => ({ label: item, value: item }))}
				/>

				<InputComboSelect
					register={register("gender")}
					error={errors.name?.message}
					name={"Enter your name"}
					labelName="Full Name"
					item={regularBrushingTimeOption?.map((item) => ({ label: item.toString(), value: item.toString() }))}
				/>

				<InputComboSelect
					register={register("sweetEatingLevel")}
					error={errors.sweetEatingLevel?.message}
					name={"How much do you eat sweets"}
					labelName="Sweet Eating Level"
					item={sweetEatingLevelOption?.map((item) => ({ label: item, value: item }))}
				/>

				<InputCombo
					register={register("phone1")}
					error={errors.phone1?.message}
					icon={<Email />}
					placeholder={"Enter your primary phone number"}
					labelName="Primary Contact Number"
				/>

				<InputCombo
					register={register("phone2")}
					error={errors.phone2?.message}
					icon={<Email />}
					placeholder={"Enter your secondary phone number- optional"}
					labelName="Secondary Contact Number"
				/>

				<InputCombo
					register={register("reference")}
					error={errors.reference?.message}
					icon={<Email />}
					placeholder={"Reference by any other doctors"}
					labelName="Reference"
				/>
				<InputCombo
					register={register("address")}
					error={errors.address?.message}
					icon={<Email />}
					placeholder={"Enter your address"}
					labelName="address"
				/>

				<InputCombo
					register={register("email")}
					error={errors.email?.message}
					icon={<Email />}
					placeholder={"Enter your email"}
					labelName="Email"
				/>

				<InputCombo
					register={register("occupation")}
					error={errors.occupation?.message}
					icon={<Email />}
					placeholder={"What is your occupation"}
					labelName="Occupation"
				/>

				<InputComboForPassword
					register={register("password")}
					error={errors.password?.message}
					icon={<Lock />}
					placeholder="*******"
					labelName="Password"
				/>

				<InputCombo
					register={register("occupation")}
					error={errors.occupation?.message}
					icon={<Email />}
					placeholder={"What is your occupation"}
					labelName="Occupation"
				/>

				<Controller
					control={control}
					name={"dateOfBirth"}
					render={(files) => (
						<div>
							<DatePicker
								date={files.field.value}
								setDate={files.field.onChange}
								className="w-full 2xl:px-4 2xl:py-6 2xl:text-lg"
								defaultPlaceholder={"Birth Date"}
							/>
							{errors?.dateOfBirth && <p className="text-red-500"> Date is required! </p>}
						</div>
					)}
				/>
			</div>

			<button
				className="mt-6 w-full transform rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 2xl:py-4 2xl:text-2xl"
				type="submit"
			>
				Sing UP
			</button>
		</form>
	);
};
