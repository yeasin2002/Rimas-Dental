import { Home } from "@/components/icons";
import { Home as HomeIcon, UndoDot } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

import OT from "@/assets/images/OT.webp";
import { Logo } from "@/components";
import Link from "next/link";
import { ShowMatchRoute } from "./ShowMatchRoute";

const Auth = ({ children }: { children: ReactNode }) => {
	return (
		<div className="relative grid grid-cols-1 items-center justify-center p-4 md:grid-cols-2">
			<Link
				href={"/"}
				className="fixed left-2 top-2 flex items-center justify-center rounded-full border border-gray-800/20 bg-white p-4 md:p-2"
			>
				<Home className="size-6 text-gray-800" />
			</Link>
			<div>
				<Image
					src={OT}
					alt="Logo"
					className="hidden aspect-square object-cover md:block"
					width={500}
					height={500}
				/>
			</div>
			<div>
				<section className="dark:bg-gray-900">
					<div className="container mx-auto flex min-h-screen items-center justify-center px-6">
						<form className="w-full max-w-md">
							<div className="mx-auto flex justify-center">
								<Logo href={"/"} />
							</div>
							<ShowMatchRoute />
							{children}
						</form>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Auth;
