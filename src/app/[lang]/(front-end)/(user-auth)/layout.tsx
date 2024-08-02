import { Home } from "@/components/icons";

import Image from "next/image";
import { ReactNode } from "react";

import OT from "@/assets/images/OT.webp";
import { LinkTo, Logo } from "@/components";
import Link from "next/link";
import { ShowMatchRoute } from "./ShowMatchRoute";

export async function generateStaticParams() {
	return [{ lang: "bn" }, { lang: "en" }];
}

const Auth = ({ children }: { children: ReactNode }) => {
	return (
		<section
			className="relative grid grid-cols-1 items-center justify-center p-4 md:grid-cols-2 h-full"
			aria-label="patient login"
		>
			<Link
				href={"/"}
				className="fixed left-2 top-2 flex items-center justify-center rounded-full border border-gray-800/20 bg-white p-4 md:p-2"
			>
				<Home className="size-6 text-gray-800" />
			</Link>
			<div>
				<Image
					src={
						"https://images.unsplash.com/photo-1667133295315-820bb6481730?w=500&h=500&auto=format&fit=crop&q=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxkZW50YWx8ZW58MHwxfDB8fHwy"
					}
					alt="Logo"
					className="hidden aspect-square object-cover md:block xl:size-full"
					width={500}
					height={500}
				/>
			</div>

			<div className="container mx-auto flex min-h-[70vh] h-full items-center justify-center px-6 dark:bg-gray-900 w-full">
				<div className="w-full max-w-md 2xl:max-w-2xl mx-auto">
					<div className="mx-auto flex justify-center">
						<Logo
							href={"/"}
							imgClassName="2xl:size-16"
							textClassName="2xl:text-3xl"
						/>
					</div>
					<ShowMatchRoute />
					{children}
					<p className="mt-4 text-center  2xl:text-2xl">
						Are you a doctor?
						<LinkTo href={"/admin"} className="mx-1 text-main-400 	">
							login here
						</LinkTo>
						as a doctor.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Auth;
