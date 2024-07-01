"use client";

import React from "react";
import { Toaster } from "react-hot-toast";
import { DeviceInfo } from "./DeviceInfo";

interface Props {
	children: React.ReactNode;
}

export const ClintProvider = ({ children }: Props) => {
	return (
		<>
			<Toaster position="top-left" />
			{children}
			{process.env.NODE_ENV === "development" && <DeviceInfo />}
		</>
	);
};
