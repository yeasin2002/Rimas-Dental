"use client";

import React, { useState } from "react";
import { ForgotFormOne } from "./forgotFormOne";
import { ForgotFormTwo } from "./forgotFormTwo";
interface Props extends React.ComponentProps<"div"> {
	dictionary?: any;
}

export const ForgotFormFormContainer = ({ dictionary, ...props }: Props) => {
	const [isSendOtp, setIsSendOtp] = useState(false);

	return (
		<div {...props}>
			{!isSendOtp ? <ForgotFormOne dictionary={dictionary} /> : <ForgotFormTwo dictionary={dictionary} />}
		</div>
	);
};
