import Image from "next/image";
import Link, { LinkProps } from "next/link";

import teeth from "@/assets/icons/3D/logo.svg";
import { LinkTo } from "../client";
import { cn } from "@/utils";
interface Props extends LinkProps {
	className?: string;
	imgClassName?: string;
	textClassName?: string;
}

export const Logo = ({ href = "/", className, imgClassName, textClassName, ...props }: Props) => {
	return (
		<LinkTo {...props} className={cn("flex items-center justify-center", className)} href={href}>
			<Image
				src={teeth}
				alt="teeth"
				sizes={"100"}
				className={cn("h-10 w-10", imgClassName)}
				aria-label="Rima's Dental Logo"
			/>
			<p className={cn("ml-2 font-grotesk text-xl font-bold text-main-400 md:text-2xl 2xl:text-3xl", textClassName)}>
				{`Rima's`} Dental
			</p>
		</LinkTo>
	);
};
