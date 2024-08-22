"use client";

import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerDoctor_server } from "@/actions/auth.actions";

// schema and  validator
import { registerFormData, registerFormFirstStepData, registerFormSecondStepData } from "@/types";
import { registerFormFirstStepSchema, registerFormSecondStepSchema } from "@/schema";
import { RegisterFirstStepForm } from "./RegisterFirstStepForm";
import { RegisterSecondStepForm } from "./RegisterSecondStepForm";

const RegisterPage = () => {
	const router = useRouter();
	const params = useParams();

	const [isLoading, setIsLoading] = useState(false);
	const [isFirstStep, setIsFirstStep] = useState(true);

	const firstForm = useForm<registerFormFirstStepData>({ resolver: zodResolver(registerFormFirstStepSchema) });
	const secondForm = useForm<registerFormSecondStepData>({ resolver: zodResolver(registerFormSecondStepSchema) });
	console.log("🚀 ~ RegisterPage ~ secondForm:", secondForm.formState.errors);

	const finalRegister = async (data: registerFormSecondStepData) => {
		setIsLoading(true);
		try {
			const body: registerFormData = {
				name: firstForm.getValues("name"),
				gender: firstForm.getValues("gender"),
				profileImage: firstForm.getValues("profileImage"),
				email: firstForm.getValues("email"),
				phone: firstForm.getValues("phone"),
				address: firstForm.getValues("address"),
				...data,
			};

			const res = await registerDoctor_server(body);
			if (!res.success) throw new Error(res.message || "Something went wrong");

			Swal.fire({
				position: "center",
				icon: "success",
				title: "Registration Successful",
				showConfirmButton: false,
				text: "You are registered  as a doctor. Wait for admin approval. Thank you.",
				timer: 4000,
			});
			router.push(`/${params?.lang || "en"}/admin/login`);
		} catch (error: any) {
			console.log("🚀 ~ finalRegister ~ error:", error);
			toast.error(error.message || "something went wrong");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div>
			{isFirstStep ? (
				<RegisterFirstStepForm formReturn={firstForm} setIsFirstStep={setIsFirstStep} />
			) : (
				<RegisterSecondStepForm
					formReturn={secondForm}
					setIsFirstStep={setIsFirstStep}
					onSave={finalRegister}
					isLoading={isLoading}
				/>
			)}
		</div>
	);
};

export default RegisterPage;
