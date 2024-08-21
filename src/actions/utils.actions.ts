"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const revalidatePath_server = async (path: string) => {
	return revalidatePath(path);
};

export const redirect_server = async (path: string) => redirect(path);
