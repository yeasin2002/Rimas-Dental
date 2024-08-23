import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { languageLocale } from "@/data";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextHandler } from "next-connect";

const { locals, defaultLocale } = languageLocale;

const getLocale = (req: NextRequest) => {
	const acceptedLang = req.headers.get("accept-language") ?? undefined;
	const langHeader = { "accept-language": acceptedLang };
	const language = new Negotiator({ headers: langHeader }).language() as any;

	return match(language, locals, defaultLocale);
};

export const internationalization = (req: NextRequest) => {
	const pathname = req.nextUrl.pathname;

	const pathnameIsMissingLocale = locals.every(
		(locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
	);

	if (pathnameIsMissingLocale) {
		const locale = getLocale(req);

		return NextResponse.redirect(new URL(`/${locale}/${pathname}`, req.url));
	}
};
