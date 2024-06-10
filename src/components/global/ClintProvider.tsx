"use client";

import React from "react";
import { DeviceInfo } from "./DeviceInfo";
interface Props {
	children: React.ReactNode;
}

export const ClintProvider = ({ children }: Props) => {
	return (
		<>
			{children}
			{process.env.NODE_ENV === "development" && <DeviceInfo />}
		</>
	);
};
