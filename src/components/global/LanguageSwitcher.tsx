"use client";

import Image from "next/image";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { bangla, english, flags, languageLocale } from "@/data";
import { Button } from "../ui";

export function LangSwitcher() {
	const params = useParams();
	const pathname = usePathname();
	const router = useRouter();

	const [selectedLang, setSelectedLang] = useState(() => {
		if (!params?.lang) {
			return english;
		}
	});

	useEffect(() => {
		const lang = params?.lang;

		if (!lang) {
			return setSelectedLang(english);
		}
		setSelectedLang(flags.find((item) => item.code === lang) || english);
	}, [params?.lang]);

	const handleLangChange = async (langObg: typeof bangla) => {
		setSelectedLang(langObg);

		const locals = languageLocale?.locals;

		const replaceRegEx = new RegExp(`^/(${locals.join("|")})\\b`);
		const newPath = pathname.replace(replaceRegEx, `/${langObg.code}`);
		return router.replace(newPath);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" className="mx-2">
					<Image
						src={selectedLang?.flag!}
						alt={selectedLang?.name! || "Flag"}
						width={20}
						height={20}
						className="h-5 w-5 object-contain"
					/>
					<span className="sr-only">Change Language </span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{flags.map((item) => (
					<DropdownMenuItem key={item.name} onClick={() => handleLangChange(item)} className="cursor-pointer gap-x-2">
						<Image src={item.flag} alt={item.name} width={20} height={20} className="h-5 w-5 object-contain" priority />
						<span>{item.name}</span>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
