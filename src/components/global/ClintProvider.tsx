"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { DeviceInfo } from "./DeviceInfo";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface Props {
	children: React.ReactNode;
}

// Create a client
const queryClient = new QueryClient();

export const ClintProvider = ({ children }: Props) => {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Toaster position="top-left" />
				{children}
				{process.env.NODE_ENV === "development" && <DeviceInfo />}
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
};
