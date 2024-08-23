"use client";

import { addService } from "@/actions/service/service.actions";
import { InputCombo, PhotoUploaderDND, UpArrow } from "@/components";
import { serviceSchema } from "@/schema";
import { serviceFormData } from "@/types";
import { cn } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { BookMarked, PencilLine } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ServiceForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isLoading },
		setError,
		setValue,
		watch,
		getValues,
	} = useForm<serviceFormData>({
		resolver: zodResolver(serviceSchema),
	});

	const onSubmit = async ({ doctorsId, ...data }: serviceFormData) => {
		const toastId = toast.loading("Processing...");
		try {
			const res = await addService({
				doctorsId: "",
				...data,
			});

			if (!res.success) throw new Error(res.message);
			toast.success(res?.message);
		} catch (error: any) {
			toast.error(error?.message || "Invalid email or password", { id: toastId });
		}
	};

	return (
		<main className="container mx-auto px-4 py-8">
			<div className="rounded-lg bg-white p-6 shadow-md">
				<form>
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

					<div className="mb-4">
						<label htmlFor="content" className="mb-2 block font-bold text-gray-700">
							Content
						</label>
						<textarea
							id="content"
							name="content"
							className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter detailed content about the service"
						></textarea>
					</div>

					<PhotoUploaderDND
						className={cn(
							"mx-auto mt-6 flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-dashed bg-white px-3 py-3 text-center dark:border-gray-600 dark:bg-gray-900",
							{ "border border-red-600": errors.coverImage },
						)}
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
						className={cn(
							"mx-auto mt-6 flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-dashed bg-white px-3 py-3 text-center dark:border-gray-600 dark:bg-gray-900",
							{ "border border-red-600": errors.icons },
						)}
						onSuccessUpload={(url) => setValue("icons", url)}
						register={register("icons")}
						labelName="icons"
					>
						<span className="flex items-center">
							<UpArrow />
							<span className="mx-3 text-gray-400">Select Icons </span>
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

					<div className="mb-4">
						<label htmlFor="tags" className="mb-2 block font-bold text-gray-700">
							Tags
						</label>
						<input
							type="text"
							id="tags"
							name="tags"
							className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter tags separated by commas"
						/>
					</div>

					<div className="flex justify-end">
						<button
							type="submit"
							className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
						>
							Add Service
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default ServiceForm;
