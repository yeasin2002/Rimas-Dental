import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const testing = async (req: NextRequest) => {
	const url = req.nextUrl.clone();
	url.pathname = "/en/login";
	NextResponse.redirect(url);
	return NextResponse.next();
};
