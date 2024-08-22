import { GoBack } from "@/components";
import { cn } from "@/utils";
import { ChevronLeft } from "lucide-react";
import React from "react";
interface Props extends React.ComponentProps<"div"> {}

export const DoctorIdNav = ({ className, ...props }: Props) => {
	return (
		<div {...props}>
			<GoBack className={cn("gap- flex items-center", className)}>
				<ChevronLeft /> <p>Go Back</p>
			</GoBack>
		</div>
	);
};
