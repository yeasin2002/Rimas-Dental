"use client";

import { BookMarked, PencilLine } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

import { addService } from "@/actions/service/service.actions";
import { InputCombo, PhotoUploaderDND, UpArrow, UploadingLoop } from "@/components";
import { serviceSchema } from "@/schema";
import { serviceFormData } from "@/types";
import { cn } from "@/utils";
import dynamic from "next/dynamic";

const QuillEditor = dynamic(() => import("@/components/shared/QuillEditor").then((module) => module.QuillEditor), {
	ssr: false,
});

interface Props {
	doctorId: string;
}

const ServiceForm = ({ doctorId }: Props) => {
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		setValue,
		watch,
		getValues,
		control,
		reset,
	} = useForm<serviceFormData>({
		resolver: zodResolver(serviceSchema),
	});

	const onSubmit = async ({ doctorsId, ...data }: serviceFormData) => {
		console.table({ doctorId, ...data });

		setIsLoading(true);

		try {
			const res = await addService({ doctorsId: doctorId, ...data });
			if (!res.success) throw new Error(res.message);
			toast.success("Service created successfully");
			reset();
		} catch (error: any) {
			console.log("🚀 ~ onSubmit ~ error:", error);
			toast.error(error?.message || "Failed to create service");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<main className="container mx-auto px-4 py-8">
			<div className="rounded-lg bg-white p-6 shadow-md">
				<form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
					<InputCombo
						register={register("name")}
						error={errors.name?.message}
						icon={<PencilLine className="mx-3 h-6 w-6 text-gray-300 dark:text-gray-500" />}
						placeholder={"Provide  you service name"}
						labelName="Service Name"
					/>

					<InputCombo
						register={register("description")}
						error={errors.description?.message}
						icon={<BookMarked className="mx-3 h-6 w-6 text-gray-300 dark:text-gray-500" />}
						placeholder={"Provide  you service description"}
						labelName="Description"
					/>

					<Controller
						control={control}
						name="content"
						render={({ field: { onChange, value } }) => (
							<div>
								<div className="flex items-center gap-x-3">
									<p>Description</p>
									{errors.content && <p className="inputCombo-warning">Required</p>}
								</div>
								<QuillEditor
									value={value}
									setValue={onChange}
									className={cn({ "border border-red-700": errors.content })}
								/>
							</div>
						)}
					/>

					<PhotoUploaderDND
						className={cn({ "border border-red-600": errors.coverImage })}
						onSuccessUpload={(url) => setValue("coverImage", url)}
						register={register("coverImage")}
						labelName="Cover Image"
					>
						<span className="flex items-center">
							<UpArrow />
							<span className="mx-3 text-gray-400">Select Cover Photo </span>
						</span>

						{watch("coverImage") && (
							<Image
								src={getValues("coverImage")}
								alt="Preview"
								width={100}
								height={100}
								className="aspect-square size-8 rounded-md object-cover"
							/>
						)}
					</PhotoUploaderDND>

					<PhotoUploaderDND
						className={cn({ "border border-red-600": errors.icons })}
						onSuccessUpload={(url) => setValue("icons", url)}
						register={register("icons")}
						labelName="icons"
					>
						<span className="flex items-center">
							<UpArrow />
							<span className="mx-3 text-gray-400">Select transparent SVG Icons </span>
						</span>

						{watch("icons") && (
							<Image
								src={getValues("icons")!}
								alt="Preview"
								width={100}
								height={100}
								className="aspect-square size-8 rounded-md object-cover"
							/>
						)}
					</PhotoUploaderDND>

					<InputCombo
						register={register("price_range")}
						error={errors.price_range?.message}
						icon={<BookMarked className="mx-3 h-6 w-6 text-gray-300 dark:text-gray-500" />}
						placeholder={"Provide  you service price range"}
						labelName="price Range"
					/>

					<InputCombo
						register={register("YT_VideoUrl")}
						error={errors.YT_VideoUrl?.message}
						icon={<BookMarked className="mx-3 h-6 w-6 text-gray-300 dark:text-gray-500" />}
						placeholder={"Provide  you service you tube video url "}
						labelName="Youtube Video Url"
					/>
					<Controller
						control={control}
						name="tags"
						render={({ field: { onChange, value = [] } }) => (
							<div>
								<p className="inputCombo-label">Tags </p>
								<TagsInput
									value={value}
									onChange={(tags: string[] = []) => onChange(tags)}
									name="tags"
									placeHolder="enter tags name "
								/>
								<p className="text-xs italic text-gray-400">press enter to add new tag</p>
							</div>
						)}
					/>

					<div className="flex justify-end">
						<button
							type="submit"
							className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
						>
							{isLoading ? <UploadingLoop /> : "Add Service"}
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default ServiceForm;
