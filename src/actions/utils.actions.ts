"use server";

import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export const revalidatePath_server = async (path: string) => {
	revalidatePath(path);
};

export const loginWithAuthJs = async ({
	email,
	password,
}: { email: string; password: string }) => {
	try {
		const response = await signIn("credentials", {
			email,
			password,
			redirect: false,
		});
		revalidatePath("/");

		return response;
	} catch (error: any) {
		return error?.message;
	}
};

export const logoutWithAuthJs = async () => {
	try {
		await signOut();
		revalidatePath("/");
	} catch (error: any) {
		return error?.message;
	}
};
