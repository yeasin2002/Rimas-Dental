import { Home } from "@/components/icons";

import Image from "next/image";
import { ReactNode } from "react";

import { LinkTo, Logo } from "@/components";
import Link from "next/link";
import { ShowMatchRoute } from "./ShowMatchRoute";
import { getDictionary } from "@/Internationalization";

export async function generateStaticParams() {
	return [{ lang: "bn" }, { lang: "en" }];
}

interface Props {
	children: ReactNode;
	params: { lang: string };
}

const Auth = async ({ children, params }: Props) => {
	const dictionary = await getDictionary(params.lang, "useAuth");

	return (
		<section
			className="relative grid h-full grid-cols-1 items-center justify-center p-4 md:grid-cols-2"
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

			<div className="container mx-auto flex h-full min-h-[70vh] w-full items-center justify-center px-6 dark:bg-gray-900">
				<div className="mx-auto w-full max-w-md 2xl:max-w-2xl">
					<div className="mx-auto flex justify-center">
						<Logo href={"/"} imgClassName="2xl:size-16" textClassName="2xl:text-3xl" />
					</div>
					<ShowMatchRoute dictionary={dictionary} />
					{children}
					<p className="mt-4 text-center 2xl:text-2xl">
						{dictionary?.areYouDoctor}
						<LinkTo href={"/admin"} className="mx-1 text-main-400">
							{dictionary?.loginHere}
						</LinkTo>
						{dictionary?.asDoctor}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Auth;
